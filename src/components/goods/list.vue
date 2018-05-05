<template>
  <div class="page bgc">
    <ul class="mui-clearfix  goods">
      <li v-for="(v,i) in goodsList" :key="i">
        <a :href="'#/goods/detail/'+v.id">
          <div class="pic">
            <img :src="v.img_url" alt="">
          </div>
          <div class="goods-title">
            <h4>{{v.title}}</h4>
          </div>
          <div class="goods-info">
            <div class="price">
              <span class="left"><em class="now">{{v.sell_price}}</em>  
              <em class="old">{{v.market_price}}</em> </span>          
              <span>热卖中</span>
              <span>剩{{v.stock_quantity}}件</span>
            </div>
          </div>
        </a>
      </li>
      
      
    </ul>
    <mt-button plain  type="danger" size="large" @click="more" v-show="showMoreBtn">加载更多</mt-button>

  </div>
</template>
<script>
import axios from "axios"
import {Toast} from "mint-ui"

export default {
  data(){
    return {
      goodsList:[],
      currentPage:1,
      showMoreBtn:true
    }
  },
  created(){
   this.getGoods();
  },
  methods:{
    getGoods(){
       axios({
      url:'http://www.escook.cn:3000/api/getgoods?pageindex='+this.currentPage
    }).then(res=>{
      
      if(res.data.status==0){
        this.goodsList.push(...res.data.message);
        // console.log(res.data.message)
        if(res.data.message.length==0){
          this.showMoreBtn=false;
          Toast("没有更多的数据了~");
        }

      }
      
    })
    },
    more(){
      this.currentPage++;
      this.getGoods()
    }
  }
}

</script>
<style scoped>
  .goods {
    margin: 10px;
    
  }
  
  .bgc {
    background: #FAFAFA;
    
  }
  ul li {
    float: left;
    width: 50%;
    padding: 5px;
    list-style: none;
    
  }
  ul li a {
    display: block;
    /* border:1px solid pink; */
    box-shadow: 1px 1px 5px #ccc;
    background-color: #fff;
    color:#ccc;
    height: 430px;
    

  }
  ul li img {
    width: 100%;
  }
  ul li .goods-title {
    color:black;
    padding:10px;
  }
  .goods-info {
    background: #FAFAFA;
    padding:10px;    
  }
  .price .now {
    color:red;
  }
  .price .old {
    text-decoration: line-through;
  }
  .price span {
    display: inline-block;
    width: 50px;
  }
  .price .left {
    margin-right: 80px;
  }
</style>


