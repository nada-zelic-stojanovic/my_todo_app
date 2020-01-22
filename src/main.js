import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import Routes from './routes';
import axios from './vue-axios';

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: 'history',
  routes: Routes
})

Vue.config.productionTip = false

new Vue({
  router: router,
  axios,
  render: h => h(App),
}).$mount('#app')
