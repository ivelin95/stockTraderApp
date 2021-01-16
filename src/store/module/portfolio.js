import stocks from "../../data/stock";

const state = {
  funds: 10000,
  stocks: [],
};

const mutations = {
  buyStocks(state, { stockId, stockPrice, stockQuantity }) {
    console.log(stockQuantity)
    const newStat = state.stocks.find((element) => element.id == stockId);
    if (newStat) {
      newStat.quantity += stockQuantity;
      console.log(state.stocks);
    } else {
      state.stocks.push({
        id: stockId,
        quantity: stockQuantity,
      });
    }
    state.funds -= stockPrice * stockQuantity;
  },
  sellStock(state, { stockId, stockPrice, stockQuantity }) {
    
    const newStat = state.stocks.find(element => element.id == stockId);
    if (newStat.quantity < stockQuantity) {
      alert('You dont have enought quantity !')
      return false
    }
    if (newStat.quantity > stockQuantity) {
      newStat.quantity -= stockQuantity;
    } else if (newStat.quantity == stockQuantity) {
      state.stocks.splice(state.stocks.indexOf(newStat), 1);
    }
    state.funds += stockPrice * stockQuantity;
  },
  setPortfolio(state , portfolio){
    state.funds = portfolio.money;
    state.stocks = portfolio.stockPortfolio;

  }
};
const actions = {
      
  sellStock({ commit }, order) {
    commit("sellStock", order);
  },
};

const getters = {
  stockPortfolio(state, getters) {
    return state.stocks.map((stock) => {
      const newStat = getters.stocks.find((element) => element.id == stock.id);
      console.log(newStat);
      return {
        id: stock.id,
        quantity: stock.quantity,
        name: newStat.name,
        price: newStat.price,
      };
    });
  },
  money(state) {
    return state.funds;
  },
};

export default {
  state,
  mutations,
  actions,
  getters,
};
