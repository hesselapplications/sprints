<template>
  <v-chip class="font-weight-medium" small color="primary">{{numTasks}}</v-chip>
</template>
<script>
export default {
  props: {
    numTasks: Number
  }
};
</script>