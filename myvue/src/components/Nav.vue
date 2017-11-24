<template>
  <div class="hello">
     <h1>{{msg}}</h1>
      <router-link :to="{path:'/Home',query:{dataid:1}}">go Home</router-link>


      
      <router-link :to="{path:'/Me',params:{name:2}}">go Me</router-link>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '页面导航'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
