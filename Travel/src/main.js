import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick' // 移动端点击 300ms延迟
import store from './strore'

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

import 'styles/reset.css' // reset css
import 'styles/border.css' // 移动端1px border
import 'styles/iconfont.css' // iconfont

Vue.config.productionTip = false
fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
