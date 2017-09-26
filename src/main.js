// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/css/reset.css'
import headerS from './components/headerS'
import headerT from './components/headerT'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import "../node_modules/vue-awesome-swiper/node_modules/swiper/dist/css/swiper.min.css"
Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false

/* eslint-disable no-new */
Vue.component('header-s', headerS);
Vue.component('header-t', headerT);
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
