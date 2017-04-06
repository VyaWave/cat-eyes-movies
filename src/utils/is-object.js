// 判断是否是对象类型
export const isObject = object => {
  return object === Object(object) &&
    typeof object !== 'function' &&
    !Array.isArray(object)
}
