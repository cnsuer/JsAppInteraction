// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import axios from 'axios'
Vue.prototype.$http = axios

// import iosJsBridge from './jsAppInteractive/iosJsBridge.js'
// let bridge = function(bridge) {
//    Vue.prototype.$bridge = bridge
// }
// iosJsBridge(bridge)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
