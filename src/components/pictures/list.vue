<template>
  <div class="page">
    <div class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
    <div class="mui-scroll">
        <a class="mui-control-item mui-active" @click="$router.push('/pics/0')">
            全部
        </a>
        <a class="mui-control-item" v-for="(v,i) in categoryList" :key="i" @click="$router.push('/pics/'+v.id)">
            {{v.title}}
        </a>
        
    </div>

    <ul>
      <li v-for="(v,i) in picslist" :key="i" @click="$router.push('/pics/detail/'+v.id)">  
        <div class="pic">
          <img v-lazy="v.img_url" alt="">
        </div>
        <div class="pic-info">
          <h4>{{v.title}}</h4>
          {{v.zhaiyao}}
        </div>      
      </li>
    </ul>
</div>
  </div>
</template>
<script>
import mui from "../../assets/mui/js/mui(1)"
import axios from "axios"
export default {
  data(){
    return {
      categoryList:[],
      picslist:[],
    }
  },
  methods:{
    getPic(){
      axios({
        url:'http://www.escook.cn:3000/api/getimages/'+this.$route.params.id
      }).then(res=>{
        if(res.data.status==0){
          this.picslist=res.data.message;
          // console.log(res.data.message)
        }
      })
    }
  },
  created(){
    this.getPic();
    axios({
      url:'http://www.escook.cn:3000/api/getimgcategory'
    }).then(res=>{
      if(res.data.status==0){
        this.categoryList=res.data.message;
        // console.log(res.data.message)
      }
    })
  },
  watch:{
    $route:function(ov,nv){
      this.getPic();
    }
  },
  mounted(){
    mui('.mui-scroll-wrapper').scroll({
      deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
  }
}
</script>
<style scoped>
.pic {
  padding-left: 10px;
  padding-right: 10px;

}
 ul {
   padding-top: 40px;
 }
 ul li {
   margin-bottom: 10px;
   position: relative;
   
 }
 
  .pic img {
    width: 100%;
  }
  .pic-info {
    position:absolute;
    bottom:0px;
    left: 5px;
    padding: 10px;
    color:#fff;
    text-align: left;
  }
  img[lazy=loading] {
  width: 40px;
  height: 300px;
  margin: auto;
}
</style>


