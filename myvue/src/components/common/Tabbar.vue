<template>
   <div class="weui-tab">
        <div class="weui-tabbar">
            <router-link to="/home">
              <p>首页</p>
            </router-link> 
           <router-link to="/explorer">
              <p>分类</p>
            </router-link>
           <router-link to="/cart">
              <p>购物车</p>
             </router-link>
           <router-link to="/me">
              <p>我的</p>
            </router-link>   
        </div>
   </div>
</template>


<style>
  .weui-tabbar{
    line-height: 1;
    background: #ffffff;
    box-shadow: 0px 0px 9px rgba(53, 53, 53, 0.15); // inset
    right: 0;
    bottom: 0;
    left: 0;
    position: fixed;
  }
  .router-link-active{
    color: #27a8fb;
  }
  .router-link-active p{
    color: #27a8fb;
  }
</style>
