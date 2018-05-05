<template>
  <div class="page news">
    <detail :artcial="newsDetail"></detail>
    <div class="news-comment">
        <comment :id="$route.params.id"></comment>
      </div>
  </div>
</template>
<script>
import axios from "axios";
import dateformat from "../../filters/dateformat"

import comment from "../common/comment"
import detail from "../common/detail.vue"
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
    comment,
    detail
  }
}
</script>
<style>
  .news {
    padding-left: 5px;
    padding-right: 5px;
  }
</style>


