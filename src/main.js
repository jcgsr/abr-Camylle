import Vue from 'vue'
import App from './App.vue'
import Meta from 'vue-meta'
import router from './router'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

import 'animate.css'

Vue.use(Meta)


Vue.config.productionTip = false

import VueRouter from 'vue-router'
Vue.use(VueRouter)

new Vue({
	router,
  render: h => h(App),
}).$mount('#app')
