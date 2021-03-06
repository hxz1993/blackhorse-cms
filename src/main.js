// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';
Vue.use(MintUI);


//引入mui的样式
import "./assets/mui/css/mui.css"
import "./assets/mui/css/icons-extra.css"

import VuePreview from 'vue-preview'

import store from './store/index'

// defalut install
Vue.use(VuePreview)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store
})
