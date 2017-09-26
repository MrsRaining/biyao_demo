import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/home.vue'
import Classify from '../views/classify.vue'
import Cart from '../views/cart.vue'
import Mine from '../views/mine.vue'
import nav_1 from '../components/nav_1.vue'
import nav_2 from '../components/nav_2.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      component: Home,
      children: [
        // {path: '', redirect: '/tuijian'},
        {path: 'tuijian', component: nav_1},
        {path: 'nanzhuang', component: nav_2},
        {path: 'nvzhuang', component: nav_2},
        {path: 'yanjing', component: nav_2},
        {path: 'peishi', component: nav_2},
        {path: 'yingtong', component: nav_2},
        {path: 'xiexue', component: nav_2},
        {path: 'yundong', component: nav_2},
        {path: 'piju', component: nav_2},
        {path: 'chuxing', component: nav_2},
        {path: 'gehu', component: nav_2},
        {path: 'meizhuang', component: nav_2},
        {path: 'jujia', component: nav_2},
        {path: 'chuju', component: nav_2},
        {path: 'jiadian', component: nav_2},
        {path: 'jiazhuang', component: nav_2},
        {path: 'jiaju', component: nav_2},
        {path: 'shuma', component: nav_2},
        {path: 'qipei', component: nav_2},
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
    }
  ]
})
