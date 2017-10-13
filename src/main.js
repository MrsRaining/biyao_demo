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
import vueResource from "vue-resource"
import Vuex from "vuex"
import vueLazyLoad from "vue-lazyload"
Vue.use(vueResource)
Vue.use(VueAwesomeSwiper)
Vue.use(Vuex)
Vue.use(vueLazyLoad, {
    loading: "../static/loading-svg/loading-bars.svg"
})

Vue.config.productionTip = false

/* eslint-disable no-new */
Vue.component('header-s', headerS);
Vue.component('header-t', headerT);

//利用vuex统一管理组件组件之间需要传递的参数。
const store = new Vuex.Store({
    state: {
      dataList: "",
    },
    mutations: {
        commitData(state, data) {
            state.dataList = data;
        }
    }
});

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
