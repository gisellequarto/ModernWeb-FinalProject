import 'font-awesome/css/font-awesome.css';

import Vue from 'vue';

import App from './App';

import './config/bootstrap';

import store from './config/store';
import router from './config/router'

Vue.config.productionTip = false

//TEMPORÁRIO!!!!!
require('axios').defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MiwibmFtZSI6ImFkbWluIiwiZW1haWwiOiJhZG1pbkBlbWFpbC5jb20iLCJhZG1pbiI6dHJ1ZSwiaWF0IjoxNjE2ODY5MjY2LCJleHAiOjE2MTY5NTU2NjZ9.cL9JBqNMze05K4sbyxNrB_HARdn-81tb8U-q_BGYo_w'

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')