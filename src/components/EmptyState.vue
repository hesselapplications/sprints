<template>
  <div class="text-center">
    <v-avatar color="primary lighten-5" size="80px">
      <v-icon color="primary lighten-1" size="48px">{{ icon }}</v-icon>
    </v-avatar>
    <div class="pt-2">
      <div class="title">{{ title }}</div>
      <div class="caption">{{ subtitle }}</div>
    </div>
  </div>
</template>
<script>
export default {
    props: {
        icon: String,
        title: String,
        subtitle: String
    }
}
</script>