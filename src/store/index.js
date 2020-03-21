import Vue from 'vue'
import Vuex from 'vuex'
import {
  arrayToTree
} from 'performant-array-to-tree'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    items: {
      "1": {
        id: 1,
        parentId: null,
        complete: false,
        dueDate: null,
        name: "Move out west"
      },
      "2": {
        id: 2,
        parentId: 1,
        complete: false,
        dueDate: null,
        name: "Sell possessions"
      },
      "3": {
        id: 3,
        parentId: 1,
        complete: false,
        dueDate: null,
        name: "Take inventory"
      },
      "4": {
        id: 4,
        parentId: 3,
        complete: false,
        dueDate: null,
        name: "Kitchen"
      },
      "5": {
        id: 5,
        parentId: 3,
        complete: false,
        dueDate: null,
        name: "Living room"
      },
      "6": {
        id: 6,
        parentId: 3,
        complete: false,
        dueDate: null,
        name: "Master bedroom"
      },
      "7": {
        id: 7,
        parentId: 3,
        complete: false,
        dueDate: null,
        name: "My bedroom"
      },
      "8": {
        id: 8,
        parentId: 3,
        complete: false,
        dueDate: null,
        name: "Storage room"
      },
      "9": {
        id: 9,
        parentId: 3,
        complete: false,
        dueDate: null,
        name: "Garage"
      },
      "10": {
        id: 10,
        parentId: 3,
        complete: false,
        dueDate: null,
        name: "Basement"
      },
      "11": {
        id: 11,
        parentId: 3,
        complete: false,
        dueDate: null,
        name: "Dining room"
      },
      "12": {
        id: 12,
        parentId: null,
        complete: false,
        dueDate: null,
        name: "Roadtrip"
      },
      "13": {
        id: 13,
        parentId: 12,
        complete: false,
        dueDate: null,
        name: "Pack"
      },
      "14": {
        id: 14,
        parentId: 12,
        complete: false,
        dueDate: null,
        name: "Purchase camping gear"
      },
      "15": {
        id: 15,
        parentId: null,
        complete: false,
        dueDate: null,
        name: "Experiences"
      },
      "16": {
        id: 16,
        parentId: 15,
        complete: false,
        dueDate: null,
        name: "Drive a supercar"
      },
      "17": {
        id: 17,
        parentId: 15,
        complete: false,
        dueDate: null,
        name: "Sensory depravation tank"
      },
      "18": {
        id: 18,
        parentId: 15,
        complete: false,
        dueDate: null,
        name: "Sky diving"
      },
      "19": {
        id: 19,
        parentId: null,
        complete: false,
        dueDate: null,
        name: "Fitness"
      },
      "20": {
        id: 20,
        parentId: 19,
        complete: false,
        dueDate: null,
        name: "Get YMCA membership"
      },
      "21": {
        id: 21,
        parentId: 19,
        complete: false,
        dueDate: null,
        name: "Go to dog park"
      },
      "22": {
        id: 22,
        parentId: 19,
        complete: false,
        dueDate: null,
        name: "Join sports leagues"
      },
      "23": {
        id: 23,
        parentId: 22,
        complete: false,
        dueDate: null,
        name: "Basketball"
      },
      "24": {
        id: 24,
        parentId: 22,
        complete: false,
        dueDate: null,
        name: "Tennis"
      },
      "25": {
        id: 25,
        parentId: 22,
        complete: false,
        dueDate: null,
        name: "Pickleball"
      },
      "26": {
        id: 26,
        parentId: 22,
        complete: false,
        dueDate: null,
        name: "Ultimate frisbee"
      }
    }
  },
  mutations: {
    saveTask(state, item) {
      delete item.children

      var isNew = item.id == null;
      if (isNew) {
        var ids = Object.keys(state.items);
        var nextId = Math.max(...ids) + 1;
        item.id = nextId;
        Vue.set(state.items, nextId, item);

      } else {
        Vue.set(state.items, item.id, item);
      }
    },
    markIdsComplete(state, {ids, complete}) {
      ids
        .map(id => state.items[id])
        .forEach(item => item.complete = complete);
    },
    deleteIds(state, ids) {
      ids.forEach(id => Vue.delete(state.items, id));
    },
    toggleComplete(state, id) {

      function markComplete(task, complete) {
        if (task == null) {
          return
        }

        task.complete = complete;

        var parent = state.items[task.parentId];
        if (parent) {
          var siblingsAllComplete = Object.values(state.items)
            .filter(task => task.parentId == parent.id)
            .every(task => task.complete);
  
          markComplete(parent, siblingsAllComplete);
        }
      }

      var task = state.items[id];
      markComplete(task, !task.complete);
    }
  },
  actions: {},
  modules: {},
  getters: {
    getTaskWithId: state => id => {
      return state.items[id];
    },
    getTaskChildren: state => id => {
      return Object.values(state.items).filter(task => task.parentId == id);
    },
    getTaskNumChildren: (state, getters) => id => {
      return getters.getTaskChildren(id).length;
    },
    getTaskPath: (state, getters) => id => {
      var task = getters.getTaskWithId(id);
      var path = [];
      while (task != null) {
        path.unshift(task);
        task = getters.getTaskWithId(task.parentId);
      }
      return path;
    },



    getItems: state => {
      var items = Object.values(state.items);
      return arrayToTree(items, {
        dataField: null
      })
    },
    getItemsWithIds: state => ids => {
      return ids.map(id => state.items[id]);
    },
    getSubTree: state => ids => {
      var parentIds = new Set(ids);

      function getParentIds(id) {
        var item = state.items[id];
        if (item) {
          var parentId = item.parentId;
          if (parentId) {
            parentIds.add(parentId);
            getParentIds(parentId);
          }
        }
      }

      ids.forEach(id => getParentIds(id));

      var items = [...parentIds].map(id => state.items[id]);
      return arrayToTree(items, {
        dataField: null
      });
    }
  }
})