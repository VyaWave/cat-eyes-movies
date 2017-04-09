/**
 * @export baseService 基本定义所有的service均从这里发出去
 * @class baseService
 * @extends {fetch}
 */
import { Observable } from 'rxjs'

export class GodService {

  getMovies () {
    return Observable.fromPromise(fetch('/cat/hotmovies')
      .then((response) => {
        return this.dealResponse(response)
      })
      .then((r) => {
        // 处理真是数据结果
        return r.data.movies
      })
      .catch(err => {
        this.dealError(err, 'movies信息失效')
      }))
  }

  getCinemas () {
    return Observable.fromPromise(fetch('/cat/cinemas')
      .then((response) => {
        return this.dealResponse(response)
      })
      .then(r => {
        let _data = []
        // 心累 o。O累什么累？
        // 处理影院数据
        for (const k in r.data) {
          r.data[k].map((i) => {
            _data.push(i)
          })
        }
        return _data
      })
      .catch(err => {
        this.dealError(err, 'cinemas信息失效')
      }))
  }

  dealError (error, apimessage) {
    console.error(error, apimessage)
  }

  dealResponse (res) {
    if (res.status >= 400) {
      throw new Error('Bad response from server')
    }
    return res.json()
  }
}
