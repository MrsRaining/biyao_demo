import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/home.vue'
import Classify from '../views/classify.vue'
import Cart from '../views/cart.vue'
import Mine from '../views/mine.vue'
import nav_1 from '../components/nav_1.vue'
import nav_2 from '../components/nav_2.vue'
import Details from '../views/details.vue'
import Login from '../components/login.vue'
import Me from '../components/me.vue'
import Register from '../components/register.vue'


Vue.use(Router)

export default new Router({
  mode: "history",
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
      component: Mine,
      children: [
        {path: "login", component: Login},
        {path: "me", component: Me},
        {path: "register", component: Register}
      ]
    },
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: "/details",
      component: Details
    }
  ]
})
