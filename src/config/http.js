import Vue from 'vue'
import router from '../router'
import axios from 'axios'
import { Indicator } from 'mint-ui'
import { Toast } from 'mint-ui'

axios.defaults.timeout = 8000;
axios.defaults.headers.common['Content-Type'] = 'application/json;charset=UTF-8'

axios.interceptors.request.use(
  config => {
    Indicator.open({
      text: '加载中...',
      spinnerType: 'fading-circle'
    });
    return config;
  },
  err => {
    Indicator.close();
    Toast({
      message: '加载超时',
      position: 'middle',
      duration: 3000
    });
    return Promise.reject(err);
  }
);

axios.interceptors.response.use(
  response => {
    let timetp = null;
    clearTimeout(timetp);
    timetp = setTimeout(() => {
      Indicator.close();
      clearTimeout(timetp);
    },500)
    return response;
  },
  error => {
    if(error.response){
      return Promise.reject(error)
    }
  }
);

Vue.prototype.$ajax = axios;
