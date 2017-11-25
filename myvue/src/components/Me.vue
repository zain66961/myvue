
<template>
   <div class="title">{{msg}}</div>
</template>
<script>
export default {
    data(){
        return{
            msg:'Me'
        }
    },
    created () {
       
         console.log(this.$route.params.dataid);
    }
}
</script>
<style>

</style>


