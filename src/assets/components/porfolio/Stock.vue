<template>
  <div class="col-sm-6 col-md-4">
    <div class="panel panel-success">
      <div class="panel-heading">
        <h3 class="panel-title">
          {{ stock.name }}
          <small>Price: {{ stock.price }} | Quantity {{ stock.quantity }}</small>
        </h3>
      </div>
      <div class="panel-body">
        <div class="pull-left">
          <input type="number" class="form-control"
           v-model="quantity" 
            />
        </div>
        <div class="pull-rigth">
          <button class="btn btn-succes" @click="sellStock" :disabled="quantity <= 0 ">Sell</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex';

export default {
      props:['stock'],
      data(){
            return{
                 quantity:0
            }
      },
      methods:{
            ...mapActions({
                  sellOrderStock:'sellStock'
            }),
           sellStock(){
                 const order ={
                        stockId: this.stock.id,
                        stockName: this.stock.name,
                        stockPrice: this.stock.price,
                        stockQuantity: this.quantity
                 } 
                 this.sellOrderStock(order);
                 this.quantity = 0;
           }
      }
}
</script>
