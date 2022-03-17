<template>
  <div id="app">
    <h2 id="geoError" v-if="!LOCATION_IS_ALLOWED">You did not allow the use of geolocation, so you need to enter your city manually</h2>
    <search v-on:getCityName="getLocation"
    ></search>
    <weather
        v-if="ALL_INFO"
    ></weather>
    <modal
        v-if="MODAL"
    ></modal>
  </div>
</template>

<script>

import search from '@/components/Search'
import weather from '@/components/Weather'
import modal from '@/components/Modal'
import {mapGetters} from 'vuex'
import store from "@/store";

export default {
  name: 'App',
  data(){
    return{

    }
  },
  computed: {
    ...mapGetters([
        'KEY', 'USER_POSITION', 'ALL_INFO', 'LOCATION_IS_ALLOWED', 'MODAL'
    ])
  },
  mounted() {
    navigator.geolocation.getCurrentPosition(this.success, this.error)
    document.addEventListener('keydown', function(e) {
      if (e.key == 'Escape') {
        store.commit('closeModal')
      }
    })
  },
  components: {
    search, weather, modal
  },
  methods: {
    success(position){
      const userPosition = {lat: position.coords.latitude, lon: position.coords.longitude}
      store.commit('setPosition', userPosition)
      this.searchFinal()
    },
    error() {
      this.$store.commit('locationNotAllowed')
    },
    async getLocation(cityName){
      try {
        const geocity = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${this.KEY}`)
        const geocityjson = await geocity.json()
        const locationName = {name: geocityjson[0].name, country: geocityjson[0].country}
        store.commit('setLocationName', locationName)
        const cityPosition = {lat: geocityjson[0].lat, lon: geocityjson[0].lon}
        store.commit('setPosition', cityPosition)
        this.searchFinal()
      }catch (e){
        alert('City name was wrong. Please, check it & try more')
      }
    },
    async searchFinal(){
      try {
        const weatherquery = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${this.USER_POSITION.lat}&lon=${this.USER_POSITION.lon}&exclude=alerts,current,minutely&appid=${this.KEY}&units=metric`)
        const weatherqueryjson = await weatherquery.json()
        store.commit('setAllInfo', weatherqueryjson)
      }catch (e){
        alert('Something going wrong...')
      }

    },

  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  border: 0;
  color: #17242A;
}
html{
  font-size: 14px;
  background-color: #DEF2F1;

}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  overflow: hidden;
  height: 100vh;
}
#geoError{
  font-size: 2rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80vw;
  text-align: center;
  z-index: -1;
  max-width: 400px;
}
.wrap__inner{
  max-height: 30vh;
  height: auto;
  overflow-y: scroll;
  width: calc(100% + 2.5rem);
  margin-left: -1rem;
  padding-right: 0;
}
.wrap__inner::-webkit-scrollbar{
  width: .5rem;
  background-color: #DEF2F1;
}
.wrap__inner::-webkit-scrollbar-button{
  display: none;
}
.wrap__inner::-webkit-scrollbar-thumb{
  background-color: #17242A;
}
@media (max-width: 426px) {
  html{
    font-size: 12px;
  }

}
</style>
