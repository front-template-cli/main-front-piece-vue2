/**
 * 数据埋点声明
 */
export type DataLogAcquisition = {
  // 终端信息
  ua?: string // ua
  // 用户信息
  uId?: string // 用户唯一标识
  unionId?: string // 微信unionId
  openId?: string // 微信openid
  phone?: string // 手机号

  // 平台信息
  project?: string // 项目名称
  version?: string // 版本号（如果是app，则需要体现上架市场+App版本号）
  channelCode?: string // 渠道标识
  sourceCode?: string // 机构编码
  environment?: string // 环境标识
  // 页面
  page?: string // 页面路由
  pageCode?: string // 页面编码

  enterTime?: string // 进入事件
  stayTime?: string // 停留时长
  time?: string // 时间戳
  // 事件

  event?: string // 点击事件
  eventCode?: string // 点击事件编码
  activeCode?: string // init：初始化
  // 接口请求
  apiUrl?: string // 接口路径
  reqParam?: string // 请求参数
}
/**
 * 事件埋点声明
 */
export type EventDataLog = {
  eventCode?: string
  eventName?: string
  activeCode?: string
}
/**
 * 路由埋点声明
 */
export type RouteDataLog = {
  page?: string
  pageCode?: string
  enterTime?: string
  stayTime?: string
}
