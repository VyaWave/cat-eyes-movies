// 深extend对象
import { isObject } from './is-object'
export const deepExtend = (target, ...data) => {
  if (!isObject(target)) {
    return target
  }
  data.forEach(one => {
    if (!isObject(one)) {
      return
    }
    Object.keys(one).forEach(key => {
      const oldValue = target[key]
      const newValue = one[key]
      if (isObject(oldValue) && isObject(newValue)) {
        target[key] = deepExtend(oldValue, newValue)
      } else {
        target[key] = one[key]
      }
    })
  })
  return target
}
