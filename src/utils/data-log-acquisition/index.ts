/**
 * 前端数据采集和上报
 */
const config = require('../../project-info')
import store from '@/store'
import type { DataLogAcquisition, EventDataLog, RouteDataLog } from './types'
import { cloneDeep } from 'lodash'
import Moment from 'moment'
import router from '@/router'

class Log {
  private readonly defaultParams: DataLogAcquisition

  constructor(params: DataLogAcquisition) {
    this.defaultParams = params
  }

  /**
   * 日志上报-事件
   * @param params 日志实例化对象
   */
  saveLog(params: DataLogAcquisition) {
    try {
      const _params: DataLogAcquisition = Object.assign(
        {},
        this.defaultParams,
        cloneDeep(params)
      )
      // 拼接参数串
      let args = ''
      for (const [key, value] of Object.entries(_params)) {
        if (args !== '') {
          args += '&'
        }
        args += key + '=' + encodeURIComponent(value || '')
      }
      const img: any = new Image(1, 1)
      img.src = `https://point.aegis-info.com/public/aegis/point/1.gif?${args}`
      // 3000ms超时处理
      setTimeout(() => {
        if (img && (!img.complete || !img.naturalWidth)) {
          img.src = null
        }
      }, 3000)
    } catch (e) {
      console.log(e)
    }
  }

  /**
   * 事件埋点
   * @param eventParams
   */
  eventLog(eventParams: EventDataLog) {
    // 页面参数
    const { fullPath, meta } = router.currentRoute
    // 事件点击参数
    const { eventName, eventCode, activeCode } = eventParams
    const _params: DataLogAcquisition = {
      activeCode: activeCode,
      enterTime: Moment(new Date()).valueOf().toString(),
      event: eventName,
      eventCode: eventCode,
      page: fullPath,
      pageCode: meta && meta.codo
    }
    // 路由参数
    this.saveLog(_params)
  }

  /**
   * 离开路由埋点
   * @param params
   */
  leaveRouteLog(params: RouteDataLog) {
    // 页面参数
    const { page, pageCode } = params
    const _params: DataLogAcquisition = {
      event: '离开页面',
      eventCode: '-1',
      page,
      pageCode: pageCode
    }
    this.saveLog(_params)
  }

  /**
   * 进入页面埋点
   */
  enterRouteLog() {
    // 页面参数
    const { fullPath, meta } = router.currentRoute
    const _params: DataLogAcquisition = {
      event: '进入页面',
      eventCode: '0',
      // eslint-disable-next-line vue/sort-keys
      enterTime: Moment(new Date()).valueOf().toString(),
      page: fullPath,
      pageCode: meta && meta.code
    }
    this.saveLog(_params)
  }

  /**
   * 接口请求埋点
   * @param requestParams
   */
  apiRequestLog(requestParams: DataLogAcquisition) {
    console.log('requestParams:', requestParams)
  }
}

const _getters = store.getters
const _env = process.env.NODE_ENV
const dataLog = new Log({
  uId: _getters['auth/id'],
  project: config.name,
  version: config.version,
  phone: _getters['auth/phone'],
  sourceCode: _getters['auth/info'].sourceCode,
  channelCode: _getters['auth/info'].channelCode,
  environment: _env,
  time: Moment(new Date()).valueOf().toString(),
  ua: navigator.userAgent
})

export default dataLog
