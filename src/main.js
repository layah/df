import Vue from 'vue';
import App from './App.vue';
import vueResource from './assets/js/vue-resource.js';
import VueRouter from 'vue-router';
import $ from './assets/js/jquery-1.9.1.js';
require('./assets/js/bootstrap.min.js');
require('./assets/js/swiper.min.js');
import './assets/css/bootstrap.min.css';
import './assets/css/base.css';
import './assets/css/public_style.css';
import './assets/css/swiper.min.css';
import {routes} from './routes'
import index from './pages/integratedCase/integratedCase'
Vue.use(vueResource);
Vue.use(VueRouter);
var router = new VueRouter({
   mode:"hash",
   base: __dirname,
   routes
});
var vm;
vm=new Vue({
  el: '#app',
  router,
  components:{
      App,
      index
  },
  render: h => h(App)
});
