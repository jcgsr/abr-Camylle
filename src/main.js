import Vue from "vue";
import App from "./App.vue";
import Meta from "vue-meta";
import router from "./router";

import "jquery";
import "popper.js";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";

import "animate.css";

Vue.use(Meta);

Vue.config.productionTip = false;

import VueRouter from "vue-router";
Vue.use(VueRouter);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
