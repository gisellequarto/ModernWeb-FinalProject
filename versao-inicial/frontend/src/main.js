import 'font-awesome/css/font-awesome.css';

import Vue from 'vue';

import App from './App';

import './config/bootstrap';

import store from './config/store';
import router from './config/router'

Vue.config.productionTip = false

//TEMPORÁRIO!!!!!
require('axios').defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MiwibmFtZSI6ImFkbWluIiwiZW1haWwiOiJhZG1pbkBlbWFpbC5jb20iLCJhZG1pbiI6dHJ1ZSwiaWF0IjoxNjE3MDk2MDcxLCJleHAiOjE2MTczNTUyNzF9.QaQ6BxoFJAGT4Qg3Tw3rEfzo0IlRn97ih8cLhtWVFpU'

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')