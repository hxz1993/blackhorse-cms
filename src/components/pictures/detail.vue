<template>
  <div class="page news">
    <detail :artcial="picInfo">
      <div slot="pics">
        <!-- <img :src="v.src" alt="" v-for="(v,i) in pics" :key="i"> -->
        <vue-preview :slides="pics"></vue-preview>
      </div>
    </detail>
    <comment :id="$route.params.id"></comment>
  </div>
</template>
<script>

import axios from "axios"
import detail from "../common/detail.vue"
import comment from "../common/comment.vue"
export default {
  data(){
    return {
      picInfo:{},
      pics:[]
    }
  },
 components:{
    comment,
    detail
  },
  created(){
    axios({
      url:'http://www.escook.cn:3000/api/getimageInfo/'+this.$route.params.id,

    }).then(res=>{
      if (res.data.status==0){
        this.picInfo=res.data.message[0];
        console.log(this.picInfo)
      }
    });

    axios({
      url:'http://www.escook.cn:3000/api/getthumimages/'+this.$route.params.id,
    }).then(res=>{
      if(res.data.status==0){
        res.data.message.forEach(v => {
          v.msrc=v.src;
          v.alt="pic";
          v.title="picture";
          v.w=600;
          v.h=400
        });
        this.pics=res.data.message;  
        console.log(this.pics)
              
      }
    })
  },
  // methods: {
  //     handleClose () {
  //       console.log('close event')
  //     }
  //   }
}
</script>
<style>
  .news {
    padding-left: 5px;
    padding-right: 5px;
  }
  figure {
    display: inline-block;
    margin: 10px 20px;
    
  }
  figure img {
    width: 70px;
  }
</style>


