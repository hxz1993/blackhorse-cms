<template>
  <div class="page news">
    <div class="news-detail">
      <div class="news-title">
        <h4>{{newsDetail.title}}</h4>
      </div>
      <p class="news-info">
        <span>发表时间：{{newsDetail.add_time | dateformat("YYYY年MM月DD日 HH:mm:ss" )}}</span>
        <span class="mui-pull-right">点击：{{newsDetail.click}}次</span>
      </p>
      <hr/>
      <div class="news-content" v-html="newsDetail.content">
        
      </div>

      <div class="news-comment">
        <comment></comment>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import dateformat from "../../filters/dateformat"

import comment from "../common/comment"
export default {
  data(){
    return {
      newsDetail:{}
    }
  },
  created(){
    // alert(this.$route.params.id)
    axios({
      url:"http://www.escook.cn:3000/api/getnew/"+this.$route.params.id
    }).then(res=>{
      if(res.data.status==0){
        this.newsDetail=res.data.message[0];
      }
    })
  },
  filters:{
    dateformat
  },
  components:{
    comment
  }
}
</script>
<style>
  .news {
    padding-left: 5px;
    padding-right: 5px;
  }
</style>


