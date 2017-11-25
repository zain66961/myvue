import Vue from 'vue'
import Router from 'vue-router'
import Nav from '@/components/Nav'
import Home from '@/components/Home'
import Me from '@/components/Me'
import BookDetails from '@/components/BookDetails'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Nav',
      component: Nav
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/Me',
      name: 'Me',
      component: Me
    },
    {
      path:'/books/:id',
      name:'BookDetails',
      component:BookDetails
    }
  ]
})
