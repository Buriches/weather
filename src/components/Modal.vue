<template>
  <div class="background" @click="click">
    <div class="modal" id="modal">
      <div v-if="active.type === 'Hourly'">
        <h2>{{String(new Date(active.hour.dt * 1000).getMonth() + 1).padStart(2, '0')}}.{{String(new Date(active.hour.dt * 1000).getDate()).padStart(2, '0')}} <b>{{new Date(active.hour.dt * 1000).getHours()}}:00</b></h2>
        <h3 class="description">{{active.hour.weather[0].description}}</h3>
        <div class="modal__grid">
          <h3>Main:</h3>
          <div></div>
          <div><h4>Temperature:</h4> <b>{{active.hour.temp}}°C</b></div>
          <div><h4>Fells like:</h4> <b>{{active.hour.feels_like}}°C</b></div>
          <div><h4>Precipitation:</h4> <b>{{active.hour.pop}}%</b></div>
          <div><h4>Humidity:</h4> <b>{{active.hour.humidity}}%</b></div>
          <h3>Other:</h3>
          <div></div>
          <div><h4>Dew point:</h4> <b>{{active.hour.dew_point}}°C</b></div>
          <div><h4>Pressure:</h4> <b>{{active.hour.pressure}}Pa</b></div>
          <div><h4>Clouds:</h4> <b>{{active.hour.clouds}} octant</b></div>
          <div><h4>Visibility:</h4> <b>{{active.hour.visibility / 100}}%</b></div>
          <div><h4>Wing speed:</h4> <b>{{active.hour.wind_speed}}km/h</b></div>
          <div><h4>Wing gust:</h4> <b>{{active.hour.wind_gust}} knots</b></div>
          <div><h4>Wind degree:</h4> <b>{{active.hour.wind_deg}}°</b></div>
          <div><h4>UVI:</h4> <b>{{active.hour.uvi}}uW/cm²</b></div>
        </div>
      </div>



      <div v-if="active.type === 'Daily'">
        <h2>{{String(new Date(active.day.dt * 1000).getMonth() + 1).padStart(2, '0')}}.{{String(new Date(active.day.dt * 1000).getDate()).padStart(2, '0')}}</h2>
        <h3 class="description">{{active.day.weather[0].description}}</h3>
        <b class="temp">{{active.day.temp.min}} — {{active.day.temp.max}}°C</b>
        <div class="modal__grid">
          <h3>Main:</h3>
          <div></div>
          <div><h4>Temperature Day:</h4> <b>{{active.day.temp.day}}°C</b></div>
          <div><h4>Temperature Morning:</h4> <b>{{active.day.temp.morn}}°C</b></div>
          <div><h4>Fells like Day:</h4> <b>{{active.day.feels_like.day}}°C</b></div>
          <div><h4>Fells like Morning:</h4> <b>{{active.day.feels_like.morn}}°C</b></div>
          <div><h4>Precipitation:</h4> <b>{{active.day.pop}}%</b></div>
          <div><h4>Humidity:</h4> <b>{{active.day.humidity}}%</b></div>
          <h3>Other:</h3>
          <div></div>
          <div><h4>Dew point:</h4> <b>{{active.day.dew_point}}°C</b></div>
          <div><h4>Pressure:</h4> <b>{{active.day.pressure}}Pa</b></div>
          <div><h4>Clouds:</h4> <b>{{active.day.clouds}} octant</b></div>
          <div><h4>UVI:</h4> <b>{{active.day.uvi}}uW/cm²</b></div>
          <div><h4>Wing speed:</h4> <b>{{active.day.wind_speed}}km/h</b></div>
          <div><h4>Wing gust:</h4> <b>{{active.day.wind_gust}} knots</b></div>
          <div><h4>Wind degree:</h4> <b>{{active.day.wind_deg}}°</b></div>
          <div><h4>Moon phase:</h4> <b>{{active.day.moon_phase * 100}}%</b></div>
          <div><h4>Sunrise:</h4> <b>{{String(new Date(active.day.sunrise * 1000).getHours()).padStart(2, '0')}}:00</b></div>
          <div><h4>Sunset:</h4> <b>{{String(new Date(active.day.sunset * 1000).getHours()).padStart(2, '0')}}:00</b></div>
          <div><h4>Moonrise:</h4> <b>{{String(new Date(active.day.moonrise * 1000).getHours()).padStart(2, '0')}}:00</b></div>
          <div><h4>Moonset:</h4> <b>{{String(new Date(active.day.moonset * 1000).getHours()).padStart(2, '0')}}:00</b></div>


        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{

    }
  },
  props: ['active'],
  methods:{
    click(){
      const div = document.querySelector( '#modal');
      document.addEventListener( 'click', (e) => {
        const withinBoundaries = e.composedPath().includes(div);
        if ( ! withinBoundaries ) {
          this.$emit('closeModal', e)
        }
      })
    }
  }
}
</script>
<style scoped>
.description{
  text-transform: capitalize;
  text-align: center;
}
.temp{
  font-size: 1.5rem;
}
  h2{
    font-size: 2rem;
    text-align: center;
    font-weight: 400;
  }
  h2 b{
    font-size: 2.5rem;
  }
  h3{
    font-size: 2.5rem;
    margin: 1rem 0;
  }
  h4{
    font-weight: 400;
  }

  .modal{
    width: 100%;
    max-width: 800px;
    box-sizing: border-box;
    background-color: #2B7A77;
    position: absolute;
    top:50%;
    left:50%;
    transform:translate(-50%, -50%);
    border-radius: 5px;
    color: white;
    padding: 3rem 2rem;
  }
  .modal__grid{
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 5rem;
    grid-row-gap: 1rem;
  }
  .modal__grid div{
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.25rem;
    font-weight: normal;
  }
  .modal__grid div b{
    font-weight: 500;
  }
  .background{
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
  *{
    color: white;
  }
@media (max-width: 426px) {
  .modal{
    padding: 2rem 1.5rem;
  }
}
</style>