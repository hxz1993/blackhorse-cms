<template>
  <div class="page">
    <ul class="mui-table-view">
    <li class="mui-table-view-cell mui-media" v-for="(v,i) in news" :key="i">
        <router-link :to="'/news/detail/'+v.id">
            <img class="mui-media-object mui-pull-left" :src="v.img_url">
            <div class="mui-media-body">
                {{v.title}}
                <p class='mui-ellipsis'>{{v.zhaiyao}}</p>
            </div>
        </router-link>
    </li>
    
</ul>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data(){
    return {
      news:[]
    }
  },
  created(){
    axios({
      url:'http://www.escook.cn:3000/api/getnewslist'
    }).then(res=>{
      if(res.data.status==0){
        // console.log(res.data.message)
        this.news=res.data.message
      }
      
    })
  }
}
</script>
<style>

</style>


