import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Vuelidate from "vuelidate";

// register tailwindcss
import "@/assets/styles/main.css";

// register vuelidate globally
Vue.use(Vuelidate);

Vue.config.productionTip = false;

// register router config in global vue instance

// vue gets mounted on <div id="app"></div> in public/index.html
new Vue({
  router,
  render: h => h(App),
}).$mount("#app");
