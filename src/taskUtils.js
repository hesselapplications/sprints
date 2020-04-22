import treeUtils from '@/treeUtils.js'
import _ from "lodash";

export default {
    ...treeUtils,

    stripInvalidProperties(task) {
        var validProperties = ["id", "complete", "dueDate", "name", "parentId", "inSprint", "userId"];
        return _.pick(task, validProperties);
    },
    
    // CHILDREN
    hasCompleteChildren(task) {
        return this.getLeafNodes(task).some(task => task.complete);
    },
    hasIncompleteChildren(task) {
        return this.getLeafNodes(task).some(task => !task.complete);
    }
}