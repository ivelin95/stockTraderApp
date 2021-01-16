import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import { routes } from './routes';
import store from './store/store'

Vue.use(VueRouter)
Vue.use(VueResource)

Vue.http.options.root = 'https://stock-trader-568c9-default-rtdb.firebaseio.com/'

Vue.filter('dolarSign', value =>{
  return '$' + value
})



const router = new VueRouter({
  mode:'history',
  routes
})
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
