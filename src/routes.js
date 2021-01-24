import LandingPage from './assets/components/LandingPage.vue';
import Portfolio from './assets/components/porfolio/Portfolio.vue';
import Stocks from './assets/components/stocks/Stocks.vue';
import News from './assets/components/news/News.vue';
import Home from './assets/components/Home.vue';

export const routes =[
      {path: '/' , component: LandingPage},
      {path: '/portfolio' , component: Portfolio},
      {path: '/stocks' , component: Stocks},
      {path: '/news' , component: News},
      {path: '/Home' , component: Home}
]