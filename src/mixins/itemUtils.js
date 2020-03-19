export default {
  methods: {
    hasChildren(item) {
      return item.children.length > 0;
    },
    getAllChildren(rootItem) {
      var children = [];

      function traverse(item) {
        item.children.forEach(child => {
          children.push(child);
          traverse(child);
        })
      }

      traverse(rootItem)
      return children;
    },
    getLeafChildren(rootItem) {
      if (rootItem.children.length == 0) {
        return [];
      }

      var leafs = [];

      function traverse(item) {
        if (item.children.length == 0) {
          leafs.push(item);
        } else {
          item.children.forEach(traverse);
        }
      }

      traverse(rootItem);
      return leafs;
    }
  }
}