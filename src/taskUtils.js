import treeUtils from '@/treeUtils.js'
import _ from "lodash";

export default {
    ...treeUtils,

    stripInvalidProperties(task) {
        var validProperties = ["id", "complete", "dueDate", "name", "parentId"];
        return _.pick(task, validProperties);
    },
    
    // CHILDREN
    getIncompleteChildren(task) {
        return treeUtils.getChildren(task).filter(task => !task.complete);
    },
    getCompleteChildren(task) {
        return treeUtils.getChildren(task).filter(task => task.complete);
    },
    getNumCompleteChildren(task) {
        return this.getCompleteChildren(task).length;
    },
    getPercentCompleteChildren(task) {
        var complete = this.getNumCompleteChildren(task);
        var total = treeUtils.getNumChildren(task);
        var percentComplete = (complete / total) * 100;
        return Math.round(percentComplete);
    }
}