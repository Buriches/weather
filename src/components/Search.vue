<template>
  <form class="search" v-on:submit.prevent="$emit('getCityName', cityName)">
    <div class="search__wrap">
      <div class="search__input">
        <input autocomplete="off" type="text" placeholder="Enter your city" v-model="cityName">
      </div>
      <button type="submit">Search</button>
    </div>

  </form>
</template>
<script>
  export default {
    data(){
      return {
        cityName: ''
      }
    }
  }
</script>
<style scoped>
  form{
    margin: 0 auto;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #3AAFA9;
    padding: 1rem 0;
    height: 7vh;
    box-sizing: border-box;
  }
  button{
    height: 100%;
    padding: 0 .5rem;
    background-color: #17242A;
    border: 0;
    color: white;
    font-weight: 300;
    cursor: pointer;
  }
  .search__input{
    height: 100%;
    display: flex;
    align-items: center;
    background-color: #17242A;
    padding: .4rem;
    padding-left: .25rem;
    box-sizing: border-box;
    padding-right: 0;
  }
  input{
    background-color: #121212;
    border: 0;
    height: 100%;
    padding-left: .25rem;
    color: white;
    border:none;
    outline:none;
    width: 20rem;
  }
  .search__wrap{
    height: 100%;
    display: flex;
    align-items: center;
    border-radius: 2px;
    overflow: hidden;
  }
  @media (max-width: 426px) {
    form{
      height: 9vh;
    }
  }
</style>