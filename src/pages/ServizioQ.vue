<template>
<h1>{{destination.name}}</h1>
</template>

<script>
import sourceData from '../data/servizi.json';
export default {
  name: "ServizioQ.vue",

  computed: {
    destinationSlug() {
      return this.$route.params.slug;
    },
    destination() {
      return sourceData.servizi.find(servizi => servizi.slug === this.destinationSlug);
    },
  },
}
</script>

<style scoped>

</style>