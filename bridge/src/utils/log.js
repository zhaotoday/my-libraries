/**
 * 提示信息
 * @param api {string} 接口
 * @param method {string} 方法
 * @param args {object} 参数列表
 */
export default ({api, method, args}) => {
  console.info(`在浏览器中不支持：${api} 的 ${method} 方法，传递的参数为：`, args)
}
