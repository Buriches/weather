<template>
  <div id="app">
    <search v-on:getCityName="searchFinal"></search>
    <weather
        v-bind:allinfo="this.allinfo"
        v-bind:name="this.name"
        v-bind:country="this.country"
        v-if="allinfo"
        v-on:modalActive="modalActive"
    ></weather>

    <modal
        v-if="modal.type"
        v-bind:active="modal"
        v-on:closeModal="closeModal"
    ></modal>
  </div>
</template>

<script>

import search from '@/components/Search'
import weather from '@/components/Weather'
import modal from '@/components/Modal'
export default {
  name: 'App',
  data(){
    return{
      allinfo:'',
      name:'',
      country:'',
      modal: {
        type: '',
        day: '',
        hour: ''
      },
    }
  },
  components: {
    search, weather, modal
  },
  methods: {
    async searchFinal(cityName){
      try {
        const key = '1ac00fede8ff179b0d96329166f66c49'
        const geocity = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${key}`)
        const geocityjson = await geocity.json()
        const weatherquery = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${geocityjson[0].lat}&lon=${geocityjson[0].lon}&exclude=alerts,current,minutely&appid=${key}&units=metric`)
        const weatherqueryjson = await weatherquery.json()
        this.allinfo = weatherqueryjson
        this.name = geocityjson[0].name
        this.country = geocityjson[0].country
      }catch (e){
        alert('Something going wrong...')
      }

    },
    modalActive(out){
      this.modal.type = out.modalType
      this.modal.day = out.modalDay
      this.modal.hour = out.modalHour
    },
    closeModal(){
      this.modal.type = ''
    }
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
