import Component from 'vue-class-component'
import Vue from 'Vue'
import './style.scss'
import {mapState, mapActions} from 'vuex'
import { moviesComing } from './mock.movies'
import { cities } from './mock.cities'

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

export default class MoviesList extends Vue {
  created () {
    // 电影数据和城市数据
    console.log(moviesComing, cities)
    this.getlist()
  }
  bindEvent () {
    console.log('绑定方法写在这里')
  }
}
