// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import App from './App'
import router from './router'
import {store} from './store/store'
import Vue from 'vue'
import Vuex from 'vuex'
import 'es6-promise/auto'


Vue.use(Vuex);

Vue.config.productionTip = false;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>',
});
