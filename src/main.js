import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import store from "./store";
import AOS from 'aos'
import 'aos/dist/aos.css'

Vue.use(Vuex)
Vue.use(AOS.init());

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store
}).$mount('#app')
