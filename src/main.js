import Vue from 'vue';
import Vuetify from 'vuetify';
import './stylus/main.styl';
import App from './App';

Vue.use(Vuetify);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
});
