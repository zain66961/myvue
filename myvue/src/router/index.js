import Vue from 'vue'
import Router from 'vue-router'
import * as getRouter from './summary.js'

Vue.use(Router)
console.log(getRouter.main,'222')
export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/main'
    },
    {
      path: '/main',
      component: getRouter.main,
    },
    {
      path: '/home',
      component: getRouter.main,
      redirect:'/home/Home',
      children:[
        {path:'/home/Home',component:getRouter.home,name:'首页'}
      ]
    },
    {
      path: '/explorer',
      component: getRouter.main,
      redirect:'/explorer/Explorer',
      children:[
        {path:'/explorer/Explorer',component:getRouter.explorer,name:'分类'}
      ]
    },
    {
      path: '/cart',
      component: getRouter.main,
      redirect:'/cart/Cart',
      children:[
        {path:'/cart/Cart',component:getRouter.cart,name:'购物车'}
      ]
    },
    {
      path: '/me',
      component: getRouter.main,
      redirect:'/me/Me',
      children:[
        {path:'/me/Me',component:getRouter.me,name:'我的'}
      ]
    },
  ]
})
