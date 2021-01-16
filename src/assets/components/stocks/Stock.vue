<template>
  <div class="col-sm-6 col-md-3">
    <div class="panel panel-success">
      <div class="panel-heading">
        <h3 class="panel-title">
          {{ stock.name }}
          <small>Price: {{ stock.price }}</small>
        </h3>
      </div>
      <div class="panel-body">
        <div class="pull-left">
          <input 
          type="number" 
          :class="{danger:checkFunds}"
          class="form-control"
           v-model="quantity" 
            />
        </div>
        <div class="pull-right">
          <button  class="btn btn-success colory" @click="buyStock"
          :disabled=" checkFunds || quantity <= 0 ">Buy</button>

        </div>
        <span class="warning">{{ checkFunds ? 'You dont have enough money' : '' }}</span>
      </div>
    </div>
    
  </div>
  
</template>

<script>
export default {
      props:['stock'],
      data(){
            return{
                 quantity:0
            }
      },
      methods:{
            buyStock(){
                  const order ={
                        stockId: this.stock.id,
                        stockName: this.stock.name,
                        stockPrice: this.stock.price,
                        stockQuantity: Number(this.quantity)
                  }
                  this.$store.dispatch("buyStock",order)
                  this.quantity = 0;
            }
      },
      computed:{
        funds(){
          return this.$store.getters.money
        },
        checkFunds(){
          return this.quantity * this.stock.price > this.funds;
        }
      }
}
</script>
<style  scoped>


.btn{
    float: right;
    padding: 5px;
    
}
.btn:focus{
  outline: none;
}
.btn:hover{
  transform: scale(1.1);
}
.warning{
  display: inline-block;
  color: red;
  opacity: 0.5;
  margin-top: 5px;

}

</style>