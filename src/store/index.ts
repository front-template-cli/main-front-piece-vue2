/*
 * @Author: your name
 * @Date: 2021-12-18 12:17:21
 * @LastEditTime: 2021-12-21 09:50:04
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /main-front-piece-vue2/src/store/index.ts
 */
import Vue from 'vue'
import Vuex from 'vuex'
import CreatePersistedState from 'vuex-persistedstate'
import { createStorage } from '@/utils/Storage'
import modules from './modules'

const Config = require('../../project-info.js')
const Storage = createStorage({ storage: localStorage })

Vue.use(Vuex)

export default new Vuex.Store({
  modules: modules,
  plugins: [
    CreatePersistedState({
      key: Config.name + '_vuex',
      paths: ['account'], // 只缓存service里的state
      getState: (key: string) => Storage.get(key),
      setState: (key: string, state: any) => Storage.set(key, state)
    })
  ]
})
