// 浅复制对象
import { isObject } from './is-object'
export const clone = (data) => {
  if (!isObject(data)) {
    return data
  }
  const misaki = data.constructor()
  Object.keys(data).forEach(key => {
    misaki[key] = data[key]
  })
  return misaki
}
