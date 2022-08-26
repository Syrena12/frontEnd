// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue, { h } from 'vue'
import App from './App'
//引入路由
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
 new Vue({
   el: '#app',
   router,
   components: { App },
   template: '<App/>'
 })  

// new Vue({
//   render: h => h(App),
//   router
// }).$mount('#app')
