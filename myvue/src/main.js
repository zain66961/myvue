// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Mint from "mint-ui"
import App from './App'
import router from './router'
// import weui from "weui";
// import {  } from "";
import './assets/css/style.css'
import './assets/css/normalize.css'
import './assets/swiper/swiper.min.css'
import './assets/swiper/swiper.min.js'
import  "mint-ui/lib/style.css"
// import "weui/dist/style/weui.min.css"
import { Toast } from 'mint-ui';
Vue.prototype.Toast = Toast
Vue.config.productionTip = false
Vue.use(Mint);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
