<template>
  <div>
  <div class="landingPage showIn">
  <h1>Welcome to Stock Trader :)
  You can buy or sell stocks , and you can save your progress</h1>
  </div>
  </div>
</template>

<script>
  export default {
    data(){
      return{}
    },
    beforeCreate() {
      //change wallpaper
    document.getElementById("body").classList.remove('colory');
    document.getElementById("body").classList.add('backGr');
    }
  }
</script>
<style>
.landingPage{
  background-color: white;
  border-radius: 10px;
  padding: 5px;

}
  .backGr{
    background-image: url("../bitcoin.jpg");
    background-size: cover;
  }
  .showIn{
 animation: fadeIn 5s;
  }
@keyframes fadeIn {
  0% {opacity:0;}

  100% {opacity:1;}
}
</style>