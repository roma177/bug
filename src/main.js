import Vue from 'vue'
import App from './App.vue'
import "./assets/app.css"
import router from 'vue-router'

Vue.use(router)


Vue.config.productionTip = false

new Vue({router,
  render: h => h(App),
}).$mount('#app')
