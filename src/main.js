import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./registerServiceWorker";
import "./assets/style/tailwind.css";
import Typewriter from 'vue-typewriter'
import AOS from 'aos';
import 'aos/dist/aos.css';

Vue.use(Typewriter);
new Vue({el: '#root'});

Vue.config.productionTip = false;


new Vue({
  created () {
    AOS.init()
  },
  router,
  render: h => h(App)
}).$mount("#app");
