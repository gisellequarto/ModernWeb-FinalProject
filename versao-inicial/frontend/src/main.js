import 'font-awesome/css/font-awesome.css';

import Vue from 'vue';

import App from './App';

import './config/bootstrap';
import './config/msgs';

import store from './config/store';
import router from './config/router'

Vue.config.productionTip = false

//TEMPORÁRIO!!!!!
require('axios').defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MiwibmFtZSI6ImFkbWluIiwiZW1haWwiOiJhZG1pbkBlbWFpbC5jb20iLCJhZG1pbiI6dHJ1ZSwiaWF0IjoxNjE3MTAzMDYwLCJleHAiOjE2MTczNjIyNjB9.eR_J3YMoYa-NhUtGAVzqJ9ll_d1zh4o5fkSBMBakfEA'

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')