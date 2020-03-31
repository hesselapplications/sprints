import {
    arrayToTree
} from 'performant-array-to-tree';

export default {
    buildTrees(flatNodeArray) {
        return arrayToTree(flatNodeArray, {
            dataField: null
        });
    },
    buildTreeMap(rootNodeArray) {
        var treeMap = {};
        var context = this;

        function addToMap(node) {
            treeMap[node.id] = node;
            context.getChildren(node).forEach(addToMap);
        }

        rootNodeArray.forEach(addToMap);
        return treeMap;
    },
    flattenTree(node) {
        var nodes = [];

        function traverse(node) {
            nodes.push(node);
            node.children.forEach(traverse);
        }

        traverse(node);
        return nodes.reverse() // returns furthest children first;
    },
    getNode(treeMap, id) {
        return treeMap[id];
    },

    // PARENT
    hasParent(node) {
        return node.parentId != null;
    },
    getParent(treeMap, node) {
        var parentId = node ? node.parentId : null;
        return this.getNode(treeMap, parentId);
    },
    getPath(treeMap, node) {
        var path = [];
        while (node != null) {
            path.unshift(node);
            node = this.getParent(treeMap, node);
        }
        return path;
    },

    // SIBLINGS
    getSiblings(treeMap, node) {
        var parent = this.getParent(treeMap, node);
        return this.getChildren(parent).filter(child => child != node);
    },

    // CHILDREN
    getChildren(node) {
        if (node == null || node.children == null) {
            return [];
        }

        return node.children;
    },
    getNumChildren(node) {
        return this.getChildren(node).length;
    },
    hasChildren(node) {
        return this.getNumChildren(node) > 0;
    },

    // LEAF NODES
    getLeafNodes(rootNode) {
        if(!this.hasChildren(rootNode)) {
            return [];
        }

        var leafs = [];
        var context = this;

        function traverse(node) {
            if (context.hasChildren(node)) {
                node.children.forEach(traverse);

            } else {
                leafs.push(node);
            }
        }

        traverse(rootNode);
        return leafs;
    },
    getNumLeafNodes(node) {
        return this.getLeafNodes(node).length;
    },
}