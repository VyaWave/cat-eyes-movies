/**
 * @export baseService 基本定义所有的service均从这里发出去
 * @class baseService
 * @extends {fetch}
 */

export class GodService {

  getMovies () {
    return fetch('/cat/hotmovies')
      .then((response) => {
        // debugger
        if (response.status >= 400) {
          console.error(response)
          throw new Error('Bad response from server')
        }
        console.log(response)
        return response.json()
      })
      .then((r) => {
        console.log(r, 'movies')
        return r.data.movies
      })
      .catch(err => {
        console.error(err)
      })
  }
}
