// 浅extend对象
import { isObject } from './is-object'
export const extend = (target, ...data) => {
  if (!isObject(target)) {
    return target
  }
  data.forEach(one => {
    if (!isObject(one)) {
      return
    }
    Object.keys(one).forEach(key => {
      target[key] = one[key]
    })
  })
  return target
}
