import Vue from 'vue';

export const fetchData = ({commit}) =>{
    Vue.http.get("data.json")
        .then(response => response.json())
        .then(data => {
            const stocks = data.stocks;
            const money = data.money;
            const stockPortfolio = data.stockPortfolio;

            const portfolio= {
                stockPortfolio,
                money
            }
            commit('setStock', stocks);
            commit('setPortfolio', portfolio);
        })
}