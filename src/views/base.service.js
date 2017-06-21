
// 给予fetch封装的api类
export class baseService extends fetch {

  getMovies() {
    fetch('/cat/hotmovies')
      .then((response) => {
        // debugger
        if (response.status >= 400) {
          console.log(response)
          throw new Error("Bad response from server")
        }
        console.log(response)
        return response.json()
      })
      .then((stories) => {
        console.log(stories, 'result');
      })
  }
}
