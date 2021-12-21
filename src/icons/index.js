/*
 * @Author: your name
 * @Date: 2021-12-18 12:15:54
 * @LastEditTime: 2021-12-18 12:35:37
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /main-front-piece-vue2/src/icons/index.js
 */
import { createApp } from 'vue'
import SvgIcon from '../components/svg-icon/index.vue'
import App from '@/App.vue'

const app = createApp(App)
app.component('SvgIcon', SvgIcon)
const requireAll = (requireContext) => requireContext.keys().map(requireContext)
const req = require.context('./svg', false, /\.svg$/)
requireAll(req)
