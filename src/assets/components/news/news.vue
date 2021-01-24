<template >


  <div class="container-fluid">
    <div class="row">
      <div class="" v v-for="data in fetchedData">
        <div class="card text-center col-md-5" v v-for="(info ,index) in data" v-if="index < 4">
          <img :src="info.urlToImage" alt="" height="150" width="250">
            <div class="header-news">
              <h4 >{{info.title}}</h4>
              <p>{{ info.description.length <= 150 ? info.description : info.description.slice(0,150) + '...'  }}</p>
              <a class="btn btn-default" :href="info.url">Read More</a>
            </div>


        </div>
      </div>
    </div>
  </div>



</template>
<script>
export default {
  data(){
    return{
      fetchedData:[]
    }
  },
  created() {
    const url = 'https://newsapi.org/v2/everything?q=bitcoin&apiKey=dff328795b4e4828afc5b3d849bef861';
    const req = new Request(url);
    fetch(req)
        .then(response=>response.json())
        .then(data=>{
          if(data){
            const artical = data.articles;
            this.fetchedData.push(artical)
          }

        })

  }
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Yusei+Magic&display=swap');
.header-news{
  position: relative;
  width: 100%;
  display: block;
}
p{
  display:inline-block;
  font-size:13px;
  font-family: 'Yusei Magic', sans-serif;
}
.row{
  background-color: #FFF;

}
.card{
  display: block;
  position: relative;
  padding-top: 25px;
  padding-bottom: 15px;
  margin-left: 5%;
}

.btn.btn-default {
  background-color: #5db4c0;
  color: #fff;
  border-radius: 0;
  border: none;

  font-size: 13px;
  font-weight: 600;
}
.btn:hover{
  transform: scale(1.2);
  transition-duration: 0.7s;
}
</style>