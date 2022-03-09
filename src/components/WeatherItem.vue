<template>
  <div @click="modalActive">
    <div class="hourweather" v-if="type==='Hourly'">
      <div class="hourweather__time" >
        {{String(new Date(hour.dt * 1000).getMonth() + 1).padStart(2, '0')}}.{{String(new Date(hour.dt * 1000).getDate()).padStart(2, '0')}} <b>{{new Date(hour.dt * 1000).getHours()}}:00</b>
      </div>
      <div class="hourweather__temp">{{hour.temp}}°C</div>
    </div>


    <div class="hourweather" v-else-if="type==='Daily'">
      <div class="hourweather__time daily__date">
        {{String(new Date(day.dt * 1000).getMonth() + 1).padStart(2, '0')}}.{{String(new Date(day.dt * 1000).getDate()).padStart(2, '0')}}
      </div>
      <div class="hourweather__description">{{day.weather[0].description}}</div>
      <div class="hourweather__temp">{{day.temp.max}} / {{day.temp.min}}°C</div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['day', 'hour', 'type'],
  data(){
    return{
      out:{
        modalType: this.type,
        modalHour: this.hour,
        modalDay: this.day
      }
    }
  },
  methods:{
    modalActive(){
      this.$emit('modalActive', this.out)
    }
  }
}
</script>
<style scoped>
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