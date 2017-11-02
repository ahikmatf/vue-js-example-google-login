// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import GoogleAuth from 'vue-google-auth'

Vue.config.productionTip = false



Vue.use(GoogleAuth, { client_id: '1099002244455-bkj6ol3ig8dugcb3n77oikpk12ictrmf.apps.googleusercontent.com' })
Vue.googleAuth().load()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
