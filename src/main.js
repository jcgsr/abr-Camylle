import Vue from "vue";
import App from "./App.vue";
import Meta from "vue-meta";
import router from "./router";

import "jquery";
import "popper.js";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";

import "animate.css";

var VueScrollTo = require('vue-scrollto');
 
Vue.use(VueScrollTo)
 
// You can also pass in the default options
Vue.use(VueScrollTo, {
     container: "body",
     duration: 500,
     easing: "ease",
     offset: 0,
     force: true,
     cancelable: true,
     onStart: false,
     onDone: false,
     onCancel: false,
     x: false,
     y: true
 })

Vue.use(Meta);

Vue.config.productionTip = false;

import VueRouter from "vue-router";
Vue.use(VueRouter);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
