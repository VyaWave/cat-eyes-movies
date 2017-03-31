/**
 * @export baseService 基本定义所有的service均从这里发出去
 * @class baseService
 * @extends {fetch}
 */

export class GodService {

  getMovies () {
    return fetch('/cat/hotmovies')
      .then((response) => {
        return this.dealResponse(response)
      })
      .then((r) => {
        // 处理真是数据结果
        return r.data.movies
      })
      .catch(err => {
        this.dealError(err, 'movies信息失效')
      })
  }

  getCinemas () {
    return fetch('/cat/cinemas')
      .then((response) => {
        return this.dealResponse(response)
      })
      .then(r => {
        // 心累 o。O
        // 处理影院数据
        return r.data.徐汇区
      })
      .catch(err => {
        this.dealError(err, 'cinemas信息失效')
      })
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
