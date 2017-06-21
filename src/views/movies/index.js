import Component from 'vue-class-component'
import{ BaseView } from '../base.view'
import {mapState, mapActions} from 'vuex'
import { moviesHotData } from './mock.movies'
import fetch from 'isomorphic-fetch'
import { GodService } from '../../service/godService'
import { Observable } from 'rxjs'
import { LoadingIndicator } from '../../components/loading-indicator/index'
import './style.scss'

@Component({
  template: require('./template.html'),
  data: () => ({
    movies: null,
    isLoading: Boolean,
    selectType: String
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
  },
  components: {LoadingIndicator}
})

export default class MoviesList extends BaseView {

  created () {
    console.log('22')
    this.selectType = 'hotMovies'
    this.isLoading = true
    // 电影数据和城市数据
    this.godService = new GodService()
    // this.movies = moviesHotData.data.movies
    this.headerConfig = {title: '猫眼电影'}
    this.getMovies()
    this.location = JSON.parse(sessionStorage.getItem('currentCity')) || {name: '上海'}
  }

  getMovies() {

    this.godService.getHotMovies()
      .distinctUntilChanged()
      .subscribe(movies => {
        console.info('影片数据已更新')
        this.movies = movies
        this.isLoading = false
      })
  }

  playIt() {
    this.$router.push({
      path: '/movie-player'
    })
  }
}
