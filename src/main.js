import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import router from "./router";
import store from "./store";
import VueSweetalert2 from "vue-sweetalert2";
import Loading from "@/components/Loading/Loading.vue";

import "sweetalert2/dist/sweetalert2.min.css";

Vue.use(VueSweetalert2);
Vue.component("Loading", Loading);

Vue.config.productionTip = false;

new Vue({
  vuetify,
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
