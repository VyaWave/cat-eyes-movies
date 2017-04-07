import { Observable } from 'rxjs/Observable'
import { Subscription } from 'rxjs/Subscription'

/**
 * @see https://github.com/vuejs/vue-rx
 */
let isInstalled = false
export function VueRx(Vue) {
  if (isInstalled) {
    return
  }
  isInstalled = true
  Vue.mixin({
    ready() {
      // 期望如下执行次序
      // ... -> ready() -> vm.ready() -> $nextTick()
      // 保证`vm`已完全初始化
      this.$nextTick(() => {
        const originData = this.$data
        const newData = {}
        const cacheData = {}
        if (!this._rx$) {
          this._rx$ = new Map()
        }
        const __this = this
        Object.keys(originData).forEach(key => {
          newData[key] = null
          const $ = this[key]
          if ($ instanceof Observable) {
            cacheData[key] = originData[key]
            Object.defineProperty(originData, key, {
              get() {
                return cacheData[key]
              },
              set(value) {
                if (__this._rx$.has(key)) {
                  __this._rx$.get(key).unsubscribe()
                }
                if (value instanceof Observable) {
                  __this._rx$.set(key, value.subscribe(r => {
                    newData[key] = r
                  }))
                } else {
                  newData[key] = value
                }
                cacheData[key] = value
              }
            })
            this._rx$.set(key,
              $.subscribe(value => {
                newData[key] = value
              })
            )
          } else {
            cacheData[key] = $
            Object.defineProperty(newData, key, {
              set(this, val) {
                cacheData[key] = val
              },
              get(this) {
                return cacheData[key]
              }
            })
            Object.defineProperty(originData, key, {
              set (this, value) {
                newData[key] = value
              },
              get (this) {
                return newData[key]
              }
            })
          }
        })
        this.$data = newData
        this.data$ = originData
      })
    },
    beforeDestroy() {
      if (this._rx$) {
        this._rx$.forEach((subscription) => {
          subscription.unsubscribe()
        })
      }
    }
  })
}
