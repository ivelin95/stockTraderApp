import stocks from '../../data/stock'
const state = {
      stocks:[]
};

const mutations = {
      setStock(state , stocks){
            state.stocks = stocks
      },
      rndStocks(state){
            state.stocks.forEach(element => {
               element.price =Math.round( element.price * ( 1 + Math.random() - 0.3) )  
            });
      }
};

const actions = {
      buyStock:({commit},order) => {
            commit('buyStocks',order);
      },
      initStock:({commit}) =>{
            commit('setStock',stocks);
      },
      randomiseStock: ({commit}) => {
            console.log('kole')
            commit('rndStocks')
      }
};

const getters = {
      stocks:state =>{
            return state.stocks;
      }
}

export default {
      state,
      mutations,
      actions,
      getters
}