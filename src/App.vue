<template>
    <div class="container">
        <Header :class="hide"></Header>
        <div class="row">
            <div class="col-xs-12">
              <transition name="slide" mode="out-in">
                <router-view></router-view>
              </transition>
             </div>
        </div>
       
    </div>
</template>

<script>
    import Header from './assets/components/Header.vue'
    export default {
      data(){
        return{
          hide:'hide'
        }
      },
        components:{
            Header
        },
        created(){

          this.$store.dispatch('initStock')
          setTimeout( () => {
            this.hide= "show"
          },1570)

        }
    }
</script>

<style>
.show {
  animation: fadeIn ease 3s;

}
.hide{
  opacity: 0;
}
.danger{
  border-color: red;
}
h3{
  text-align: center;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 30px;

}

@keyframes fadeIn {
  0% {opacity:0;}
  100% {opacity:1;}
}



</style>
