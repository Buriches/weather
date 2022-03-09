<template>
  <div class="wrapper">
  <div class="weather">
    <div>
      <h1>{{allinfo.hourly[0].temp}}°C</h1>
      <h2>{{country}}, {{name}}</h2>
      <h3>{{allinfo.hourly[0].weather[0].description}}</h3>
      <hr>
    </div>
    <div class="wrap">
      <h3>48 hours ahead:</h3>
        <hourly
            v-bind:hourly="allinfo.hourly"
            v-on:modalActive="modalActive"
        ></hourly>
    </div>
    <div class="wrap">
      <h3>7 days ahead</h3>
      <daily
          v-bind:daily="allinfo.daily"
          v-on:modalActive="modalActive"
      ></daily>
    </div>

  </div>
  </div>
</template>
<script>
import hourly from '@/components/Hourly'
import daily from "@/components/Daily";
export default {
  props:['allinfo', 'name', 'country'],
  methods:{
    modalActive(out){
      this.$emit('modalActive', out)
    }
  },
  components:{
    hourly, daily
  }
}
</script>
<style scoped>
  hr{
    width: 5rem;
    border: 0;
    height: 1px;
    background-color: #17242A;
    margin-top: 1rem;
  }

  .hourweather{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: .5rem 1rem;
    background-color: #3AAFA9;
    cursor: pointer;
  }

  .hourweather:hover{
    filter: invert();
  }
  .hourweather__temp{
    font-weight: bold;
    font-size: 1.3rem;
  }
  .hourweather__description{
    font-weight: bold;
    text-transform: capitalize;
  }
  .weather{
    width: 100%;
    max-width: 700px;
    margin: 0 auto;
    padding: 1.5rem 1rem;
    background-color: #3AAFA9;
    margin-top: 1vh;
    margin-bottom: 1vh;
    box-sizing: border-box;
    border-radius: 3px;
    font-size: 16px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    height: 91vh;
    justify-content: space-between;
  }
  h1{
    font-size: 4rem;
  }
  h3{
    text-transform: capitalize;
    margin-bottom: 1rem;
  }
  h4{
    font-size: 1.3rem;
  }
  b{
    font-size: 1.5rem;
  }
  .wrapper{
    padding-left: .5rem;
    margin: 0 auto;
  }
  .daily__date{
    font-weight: bold;
  }
  @media (max-width: 426px) {
    .wrap__inner{
      max-height: 25vh;
    }
    .wrapper{
      padding-left: 0;
    }

    .weather{
      height: 89vh;
    }
  }
</style>