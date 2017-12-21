<template>
   <div class="title">
       <span>这是购物车</span>
       
       <!-- <mt-swipe :auto="4000">
        <mt-swipe-item>1</mt-swipe-item>
        <mt-swipe-item>2</mt-swipe-item>
        <mt-swipe-item>3</mt-swipe-item>
        </mt-swipe> -->
        
    </div>
</template>
<script>
export default {
    data(){
        return{
            msg:'购物车'
        }
    },
    mounted(){
     this.indicator.open('加载中...');
    },
}
</script>

<style scoped>
 
</style>

