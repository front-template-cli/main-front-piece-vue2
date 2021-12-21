/**
 * 注意：modules中包的命名规则为 驼峰命令法
 */
// /********************************自动导包 start********************************/
const file = require.context('./', true, /index.ts$/)
const modules: any = {}
file.keys().forEach((key: string) => {
  // toUpper(name.replaceAll('-', ''))
  const name = key.replace(/(.\/)*([^/]+).*/gi, '$2')
  if (file(key).default) {
    modules[name] = file(key).default
  }
})
// // /********************************自动导包 end********************************/
export default modules
