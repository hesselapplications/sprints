<template>
  <div class="py-3">
    <v-skeleton-loader loading class="py-1" v-for="index in 5" :key="index" type="list-item-avatar"></v-skeleton-loader>
  </div>
</template>
