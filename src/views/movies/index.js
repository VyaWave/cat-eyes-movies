import Component from 'vue-class-component'
import{ BaseView } from '../baseview'
import {mapState, mapActions} from 'vuex'
import { moviesHotData } from './mock.movies'
import { cities } from './mock.cities'
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
  }
}
