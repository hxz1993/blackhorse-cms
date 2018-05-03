<template>
  <div>
      <h4>发表评论</h4>
      <hr>
      <textarea name="" id="" cols="30" rows="3" v-model="content"></textarea>
      <mt-button type="primary" size="large" @click="postComment">发表评论</mt-button>
      
      <ul class="mui-table-view">
        <li  class="mui-table-view-cell mui-media">
            <a href="javascript:;">
            <p class="comment-tilte">
                <span>第楼</span>
                <span>发表时间：</span>
                <span class="mui-pull-right">
                用户名
                </span>
            </p>
            <img src="../../assets/images/menu1.png" class="mui-media-object mui-pull-right">
            <div class="mui-media-body">
                <p class="mui-ellipsis comment-content" ></p>
            </div>
            </a>
        </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios"
export default {
  data(){
      return {
          content:''
      }
  },
//   created(){
//       axios({
//           url:"http://www.escook.cn:3000/api/getcomments/"+artid+currentPage
//       }).then(res=>{
//           if(res.data.status==0){
//               console.log(res.data.message)
//           }
//       })
//   },
  methods:{
      
      postComment(){

      }
  }
}
</script>

<style scoped>
    textarea {
        margin-top: 10px;
        margin-bottom: 0px;
    }
</style>
