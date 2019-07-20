// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from "./store/store";

import axios from 'axios'
import VueResource from 'vue-resource'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '../static/js/jquery-1.4.4.min.js'
import '../static/js/jquery.ztree.core.js'
import '../static/js/adaptation.js'
import '../static/js/callnmb.js'
import "@/assets/css/demo.css"
import "@/assets/css/reset.css"
import "@/assets/css/zTreeStyle/zTreeStyle.css";
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueResource)
Vue.prototype.ajax=axios
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})


