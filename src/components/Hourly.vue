<template>
  <div class="wrap__inner">
    <weather-item
        v-on:modalActive="modalActive"
        v-for="(item, index) of hourly" v-bind:key="index"
        v-bind:hour="item"
        v-bind:type="type"

    ></weather-item>

  </div>
</template>
<script>
import weatherItem from "@/components/WeatherItem";
export default {
  props: ['hourly'],

  components:{weatherItem},
  data(){
    return{
      type: 'Hourly',
    }
  },
  methods:{
    modalActive(out) {

      this.$emit('modalActive', out)
    }
  }
}
</script>
<style scoped>

</style>