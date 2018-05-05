<template>
  <div class="page des">
      <detail :artcial="goodsDes"></detail>
  </div>
</template>
<script>
import detail from "../common/detail.vue"
import axios from "axios"
export default {
    data(){
        return{
            goodsDes:{}
        }
    },
    components:{
     detail
    },
    created() {
        axios({
            url:'http://www.escook.cn:3000/api/goods/getdesc/'+this.$route.params.id
        }).then(res=>{
            if(res.data.status==0){
                this.goodsDes=res.data.message[0];
                // console.log(this.goodsDes)
            }
        })
    }
}
</script>
<style scoped>
    .des {
        padding-left:5px;
        padding-right:5px;
    }

</style>
