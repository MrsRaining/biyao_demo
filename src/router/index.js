import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/home.vue'
import Classify from '../views/classify.vue'
import Cart from '../views/cart.vue'
import Mine from '../views/mine.vue'
import nav_1 from '../components/nav_1.vue'
import nav_2 from '../components/nav_2.vue'
import Fenlei from '../components/fenlei.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      component: Home,
      children: [
        // {path: '', redirect: '/tuijian'},
        {path: "", redirect: "tuijian"},
        {path: 'tuijian', component: nav_1},
        {path: ':id', component: nav_2}
      ]
    },
    {
      path: '/classify',
      name: 'classify',
      component: Classify
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    },
    {
      path: '/mine',
      name: 'mine',
      component: Mine
    },
    {
      path: '/',
      redirect: '/home'
    },{
      path:'/fenlei',
      name:'fenlei',
      component:Fenlei
    }
  ]
})
