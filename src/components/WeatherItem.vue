<template>
  <div @click="modalActive">
    <div class="hourweather" v-if="type==='Hourly'">
      <div class="hourweather__time" >
        {{String(new Date(hour.dt * 1000).getMonth() + 1).padStart(2, '0')}}.{{String(new Date(hour.dt * 1000).getDate()).padStart(2, '0')}} <b>{{new Date(hour.dt * 1000).getHours()}}:00</b>
      </div>
      <div class="hourweather__temp">{{hour.temp}}°C</div>
    </div>


    <div class="hourweather" v-else-if="type==='Daily'">
      <div class="hourweather__time daily__date col">
        {{String(new Date(day.dt * 1000).getMonth() + 1).padStart(2, '0')}}.{{String(new Date(day.dt * 1000).getDate()).padStart(2, '0')}}
        <div><i>{{ dayAWeek() }}</i></div>
      </div>
      <div class="hourweather__description col">{{day.weather[0].description}}</div>
      <div class="hourweather__temp col">{{day.temp.max}} / {{day.temp.min}}°C</div>
    </div>
  </div>
</template>
<script>
import store from "@/store";

export default {
  props: ['day', 'hour', 'type', 'index'],
  data(){
    return{

    }
  },
  methods:{
    modalActive(){
      const modal = {
        type: this.type,
        day: this.day,
        hour: this.hour
      }
      store.commit('setModal', modal)

    },
    dayAWeek(){
      let res
      const week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
      const numberOfWeek = String(new Date(this.day.dt * 1000).getDay())

      if (this.index === 0){
        res = 'Today'
      }else if(this.index === 1){
        res = 'Tomorrow'
      }else{
        res = week[numberOfWeek]
      }
      return res
    }
  }
}
</script>
<style scoped>
.hourweather__description{
  text-align: center;
}
.col{
  width: 33.33%;
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
  text-align: right;
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