/*
 * @Author: 常竣
 * @Date: 2021-12-18 12:08:49
 * @LastEditTime: 2021-12-18 12:50:34
 * @LastEditors: Please set LastEditors
 * @Description: 入口文件
 * @FilePath: /main-front-piece-vue2/src/main.ts
 */
import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
Vue.config.productionTip = false
Vue.use(Antd)
new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
