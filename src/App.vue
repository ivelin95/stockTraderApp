<template>
    <div class="container">
        <Header></Header>
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
        components:{
            Header
        },
        created(){
           
            this.$store.dispatch('initStock')
        }
    }
</script>

<style>
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
