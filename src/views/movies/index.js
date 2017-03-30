import Component from 'vue-class-component'
import{ BaseView } from '../baseview'
import {mapState, mapActions} from 'vuex'
import { moviesHotData } from './mock.movies'
import { cities } from './mock.cities'
import fetch from 'isomorphic-fetch'
import './style.scss'

@Component({
  template: require('./template.html'),
  methods: {
    ...mapActions({
      getlist: 'getSchoolActivity'
    })

  },
  computed: {
    ...mapState({
      'test': state => state.moviesListVuex.test,
      'loading': state => state.moviesListVuex.loading
    })
  }
})

export default class MoviesList extends BaseView {
  created () {
    // 电影数据和城市数据
    // this.getlist()
    this.movies = moviesHotData.data.movies
    this.cities = cities
    this.headerConfig  = {title: '猫眼电影'}

    require('es6-promise').polyfill();
    require('isomorphic-fetch')

    // fetch('/cat/hotmovies', myInit)
    //   .then((response) => {
    //     console.log('222')
    //     // debugger
    //     if (response.status >= 400) {
    //       console.log(response)
    //       throw new Error("Bad response from server")
    //     }
    //     console.log(response)
    //     return response.json()
    //   })
    //   .then((stories) => {
    //     console.log(stories,2);
    //   })
    // }
  }
}
