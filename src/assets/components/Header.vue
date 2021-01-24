<template>
  <nav class="navbar navbar-default" style="margin-top: 30px">
    <div class="container-fluid">
      <div class="navbar-header">
        <router-link to="/Home" class="navbar-brand" activeClass="active"  tag="li"><a>The Stocks Trader</a></router-link>
      </div>
      <router-link to="/portfolio" class="navbar-brand" activeClass="active"  tag="li"><a>Portfolio</a></router-link>
      <router-link to="/Stocks" class="navbar-brand" activeClass="active" tag="li"><a>Stocks</a></router-link>
      <router-link to="/news" class="navbar-brand" activeClass="active" tag="li"><a>News</a></router-link>
      <div class="collapse navbar-collapse">
        <ul class="nav navbar-nav navbar-right">
          <li><a href="#">Funds : {{ money | dolarSign}} </a></li>
          <li><a href="#" @click.prevent="rndStocks">End Day</a></li>
          <li @click="toogleDropdown =!toogleDropdown" class="dropdown" :class="{open : toogleDropdown}" >
            
            <a
              href="#"
              class="dropdown-toggle"
              data-toggle="dropdown"
              role="button"
              aria-haspopup="true"
              aria-expanded="false">Save & Load <span class="caret"></span></a>
             
            <ul class="dropdown-menu" >
                  <li><a href="#" @click="saveData">Save Data</a></li>
                  <li><a href="#" @click="loadData">Load Data</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
import {mapGetters} from 'vuex';
import {mapActions} from 'vuex';

export default {
    data(){
      return{
        toogleDropdown:false
      }
    },

    computed:{
       ...mapGetters([
                'money'
            ]),
        
    },
    methods:{
      ...mapActions([
          'randomiseStock',
          'fetchData'
        ]),
      rndStocks(){
        this.randomiseStock()
      },
      saveData(){
        const currentData = {
          money: this.$store.getters.money,
          stockPortfolio: this.$store.getters.stockPortfolio,
          stocks: this.$store.getters.stocks
        }
        this.$http.put('data.json', currentData)
      },
      loadData: function () {
        this.fetchData();
      }
    }
}
</script>
<style scoped>
li :hover{
  transform: scale(1.1);
  transition-duration: 0.5s;
}
.navbar-brand{
  list-style: none;
}
a:hover{
  text-decoration: none;

}
</style>