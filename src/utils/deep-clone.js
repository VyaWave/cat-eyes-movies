// 深度复制对象
import { isObject } from './is-object'
export const deepClone = (
    data,
    filter = (value, key, data) => false
  ) => {
    if (!isObject(data)) {
      return data
    }
    const misaki = data.constructor()
    Object.keys(data).forEach(key => {
      const value = data[key]
      misaki[key] = filter(value, key, data)? value : deepClone(value)
    })
    return misaki
}
