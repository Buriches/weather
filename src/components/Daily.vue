<template>
  <div class="wrap__inner">
    <weather-item
        v-for="(item, index) of daily" v-bind:key="index"
        v-bind:day="item"
        v-bind:type="type"
        v-on:modalActive="modalActive"
    ></weather-item>

  </div>
</template>
<script>
import weatherItem from "@/components/WeatherItem";
export default {
  props: ['daily'],

  components:{weatherItem},
  data(){
    return{
      type: 'Daily'
    }
  },
  methods:{
    modalActive(out){
      this.$emit('modalActive', out)
    }
  }
}
</script>
<style scoped>

</style>