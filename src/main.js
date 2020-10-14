import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";

import AnimateCSS from "animate.css";

import { ValidationProvider } from 'vee-validate/dist/vee-validate.full.esm';
Vue.component('ValidationProvider', ValidationProvider);

Vue.use(AnimateCSS);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
