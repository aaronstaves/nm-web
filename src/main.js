
import Vue from 'vue';

import Vuetify from 'vuetify';
import './stylus/main.styl';

import App from './App';
import router from './router';
import store from './store';
import AlertComponent from './components/Alert';

Vue.use(Vuetify);
Vue.component('app-alert', AlertComponent);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App),
});
