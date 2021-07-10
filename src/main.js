import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router/routes'
import store from './store/index'

Vue.use(VueRouter)
Vue.config.productionTip = false

import '@/assets/css/light.css'
import '@/assets/js/app.js'

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')

