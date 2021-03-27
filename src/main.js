import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import "materialize-css/dist/css/materialize.min.css";
import "material-design-icons/iconfont/material-icons.css";
import M from "materialize-css";

Vue.config.productionTip = false;

new Vue({
  store,
  render: (h) => h(App),
  mounted() {
    M.AutoInit();
  },
}).$mount("#app");
