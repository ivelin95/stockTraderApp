import Home from './assets/components/Home.vue';
import Portfolio from './assets/components/porfolio/Portfolio.vue';
import Stocks from './assets/components/stocks/Stocks.vue';

export const routes =[
      {path: '/' , component: Home},
      {path: '/portfolio' , component: Portfolio},
      {path: '/stocks' , component: Stocks},
]