<template>
   <div class="title">{{msg}}</div>
</template>
<script>
export default {
    data(){
        return{
            msg:'my home'
        }
    },
    created () {
        console.log(this.$route.query.dataid);
    }
}
</script>

<style scoped>
 .title{
     color:red;
 }
</style>

