<template>
  <div class="customAnime">
  <div :class="loading">
    <div class="dot"></div>
    <div class="dot"></div>
    <div class="dot"></div>
    <div class="dot"></div>
    <div class="dot"></div>
  </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      loading : 'loading'
    }
  },beforeCreate() {
  //  document.getElementById("body").classList.add('colory');
    document.getElementById("body").classList.remove('backGr');
  },
  created() {
   setTimeout( () => {

     console.log('asdasdasd')
     this.loading= "none"
     this.$router.push('Home')
   },3500)
 }
}

</script>

<style >
.none{
  display: none;
}

.loading {
  display: flex;
}
.loading .dot {
  position: relative;
  width: 2em;
  height: 2em;
  margin: 0.8em;
  border-radius: 50%;
}
.loading .dot::before {
  position: absolute;
  content: "";
  width: 100%;
  height: 100%;
  background: inherit;
  border-radius: inherit;
  animation: wave 2s ease-out infinite;
}
.loading .dot:nth-child(1) {
  background: #7ef9ff;
}
.loading .dot:nth-child(1)::before {
  animation-delay: 0.2s;
}
.loading .dot:nth-child(2) {
  background: #89cff0;
}
.loading .dot:nth-child(2)::before {
  animation-delay: 0.4s;
}
.loading .dot:nth-child(3) {
  background: #4682b4;
}
.loading .dot:nth-child(3)::before {
  animation-delay: 0.6s;
}
.loading .dot:nth-child(4) {
  background: #0f52ba;
}
.loading .dot:nth-child(4)::before {
  animation-delay: 0.8s;
}
.loading .dot:nth-child(5) {
  background: #000080;
}
.loading .dot:nth-child(5)::before {
  animation-delay: 1s;
}

@keyframes wave {
  50%, 75% {
    transform: scale(2.5);
  }
  80%, 100% {
    opacity: 0;
  }
}
.customAnime{
  width: 25%;
  position: relative;
  left: 36%;
}
.colory{
  background-color: darkslateblue;;
  animation-name: example;
  animation-duration: 0,01s;
}


@keyframes example {
  0%   {background-color: #fcfbb3;}
  25%  {background-color: #d2cc46;}
  50%  {background-color: #a4a4ec;}
  100% {background-color: darkslateblue;;}

}
.slide-enter-active{
  animation: slide-in 300ms ease-out;
}
.slide-leave-active{
  animation: slide-out 300ms ease-out
}
@keyframes slide-in{
  from{
    transform: translateY(-40px);
    opacity: 0;
  }
  to{
    transform: translateY(0px);
    opacity: 1;
  }
}
@keyframes slide-out{
  from{
    transform: translateY(0px);
    opacity: 1;
  }
  to{
    transform: translateY(40px);
    opacity: 0;
  }
}

</style>