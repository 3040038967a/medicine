// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import element from "element-ui"
import axios from "axios"
import jquery from "jquery"
import store from "./store"


// 安装百度地图
import BaiduMap from "vue-baidu-map"
Vue.use(BaiduMap,{
	// key秘钥
 ak:"ba45f4870c56bb737255573e25375f9e"
	
})





Vue.use(jquery);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
	store,
  components: { App },
  template: '<App/>'
})
