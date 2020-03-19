<template>
  <div class="progress-container">
    <v-progress-linear
      :value="progress"
      rounded
      color="light-green"
      :background-opacity="0.25"
      height="8px"
    ></v-progress-linear>
  </div>
</template>
<script>
import itemUtils from "@/mixins/itemUtils.js";

export default {
  mixins: [itemUtils],
  props: {
    item: Object
  },
  computed: {
    progress() {
      var leafNodes = this.getLeafChildren(this.item);
      var total = leafNodes.length;
      var completed = leafNodes.filter(item => item.complete).length;
      var percentComplete = (completed / total) * 100;
      return Math.round(percentComplete);
    }
  }
};
</script>
<style scoped>
.progress-container {
  width: 50px;
  display: inline-block;
}
</style>