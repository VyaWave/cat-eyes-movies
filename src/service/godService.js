/**
 * @export baseService 基本定义所有的service均从这里发出去
 * @class baseService
 * @extends {fetch}
 */

export class GodService {

  getMovies () {
    return fetch('/cat/hotmovies')
      .then((response) => {
        this.dealResponse(response)
      })
      .then((r) => {
        // 处理真是数据结果
        return r.data.movies
      })
      .catch(err => {
        this.dealError(err)
      })
  }

  getCinemas () {
    return fetch('/cat/cinemas')
      .then((response) => {
        this.dealResponse(response)
      })
      .then((r) => {
        // 心累 o。O
        // 处理真是数据结果
        return r.data.徐汇区
      })
      .catch(err => {
        this.dealError(err)
      })
  }

  dealError (error) {
    console.error(error)
    console.info('未知错误')
  }

  dealResponse (res) {
    if (res.status >= 400) {
      throw new Error('Bad response from server')
    }
    return res.json()
  }
}
