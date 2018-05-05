<template>
  <div class="page">
    <mt-swipe :auto="4000">
    <mt-swipe-item v-for="(v,i) in pics" :key="i">
      <img :src="v.img" alt="">
    </mt-swipe-item> 
  </mt-swipe>

  <ul class="mui-table-view mui-grid-view">
    <li class="mui-table-view-cell mui-media mui-col-xs-6">
        <router-link to="/news">
            <img class="mui-media-object" src="../../assets/images/menu1.png">
            <div class="mui-media-body">新闻资讯</div>
        </router-link>
    </li>
    <li class="mui-table-view-cell mui-media mui-col-xs-6">
        <router-link to="/pics/0">
          <img class="mui-media-object" src="../../assets/images/menu2.png">
          <div class="mui-media-body">图片分享</div>
        </router-link>
    </li>
    <li class="mui-table-view-cell mui-media mui-col-xs-6">
        <router-link to="/goods"><img class="mui-media-object" src="../../assets/images/menu3.png">
          <div class="mui-media-body">商品购买</div>
        </router-link>
    </li>
    <li class="mui-table-view-cell mui-media mui-col-xs-6">
        <router-link to="/">
          <img class="mui-media-object" src="../../assets/images/menu4.png">
          <div class="mui-media-body">留言反馈</div>
        </router-link>
    </li>
    <li class="mui-table-view-cell mui-media mui-col-xs-6">
        <router-link to="/">
          <img class="mui-media-object" src="../../assets/images/menu5.png">
          <div class="mui-media-body">视频专区</div>
        </router-link>
    </li>
    <li class="mui-table-view-cell mui-media mui-col-xs-6">
        <router-link to="/">
          <img class="mui-media-object" src="../../assets/images/menu6.png">
          <div class="mui-media-body">联系我们</div>
        </router-link>
    </li>
	</ul>    
  </div>
</template>
<script>
import axios from "axios"
export default {
  data(){
    return {
      pics:[]
    }
  },
  created(){
    axios({
      url:"http://www.escook.cn:3000/api/getlunbo"
    }).then(res=>{
      if(res.data.status==0){
        this.pics=res.data.message
        // console.log(res.data.message);

      }
    })
  }
}
</script>
<style scoped>
  .mint-swipe {
    height: 250px;
  }
  .mint-swipe img {
    width: 100%;
  }
  .mui-table-view.mui-grid-view .mui-table-view-cell {
    width: 33.33%;
  }
  .mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-object {
    width: 60%;
  }
</style>


