import Component from 'vue-class-component'
import{ BaseView } from '../base.view'
import {mapState, mapActions} from 'vuex'
import { moviesHotData } from './mock.movies'
import { cities } from './mock.cities'
import fetch from 'isomorphic-fetch'
import { GodService } from '../../service/godService'
import './style.scss'

@Component({
  template: require('./template.html'),
  data: () => ({
    movies: null
  }),
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
    this.godService = new GodService()
    //this.movies = moviesHotData.data.movies
    this.cities = cities
    this.headerConfig = {title: '猫眼电影'}
    this.getMovies()
  }

  getMovies() {
    this.godService.getMovies()
      .then(movies => {
        this.movies = movies
        console.log(movies)
      })
  }
}
