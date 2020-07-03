
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// import VueAwesomeSwiper from 'vue-awesome-swiper'
// import 'swiper/css/swiper.css'

// Vue.use(VueAwesomeSwiper, /* { default options with global component } */)



Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
