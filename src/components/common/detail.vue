<template>
   <div class="news-detail">
      <div class="news-title">
        <h4>{{artcial.title}}</h4>
      </div>
      <p class="news-info">
        <span>发表时间：{{artcial.add_time | dateformat("YYYY年MM月DD日 HH:mm:ss" )}}</span>
        <span class="mui-pull-right">点击：{{artcial.click}}次</span>
      </p>
      <hr/>
      <slot name="pics"></slot>
      <div class="news-content" v-html="artcial.content">       
      </div>    
    </div>
</template>
<script>
import dateformat from "../../filters/dateformat"
export default {
  
  props:["artcial"],

  filters:{
      dateformat
  }
}
</script>
<style>
  .news-content {
    color:#ccc
  }
</style>

