<template>
  <div>
    <h1>{{this.ALL_INFO.hourly[0].temp}}°C</h1>
    <h2 v-if="this.LOCATION_NAME.country">{{this.LOCATION_NAME.country}}, {{this.LOCATION_NAME.name}}</h2>
    <h2 v-else>Your location</h2>
    <h3>{{this.ALL_INFO.hourly[0].weather[0].description}}</h3>
    <hr>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "HeaderOfWeather",
  computed: {
    ...mapGetters([
      'LOCATION_NAME', 'ALL_INFO'
    ])
  },
}
</script>

<style scoped>
h1{
  font-size: 4rem;
}
h3{
  text-transform: capitalize;
  margin-bottom: 1rem;
}
</style>