<template>
   <div>
        <div>Main主视图</div>
        <router-view></router-view>
        <Tab></Tab>         
   </div> 
  <!-- <div class="hello">
      <router-link :to="{name:'Home',query:{dataid:1}}">主页</router-link>
      <router-link :to="{name:'Explorer',params:{dataid:1}}">分类</router-link>
       <router-link :to="{name:'Cart',params:{dataid:1}}">购物车</router-link>
      <router-link :to="{name:'Me',params:{dataid:2}}">我的</router-link>
      <router-link :to="{name:'BookDetails',params:{id:63}}">图书详情</router-link>
  </div> -->
</template>

<script>
import Tab from './common/Tabbar.vue'
export default {
    components: {Tab} 
       
}
</script>

