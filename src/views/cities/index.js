import Component from 'vue-class-component'
import{ BaseView } from '../base.view'
import { cities } from './mock.cities'
import { LoadingIndicator } from '../../components/loading-indicator/index'
import './style.scss'

@Component({
  template: require('./template.html'),
  components: {LoadingIndicator},
  data: () => ({
    isLoading: Boolean
  })
})

export default class CitiesChooser extends BaseView {
  created () {
    // 城市数据
    this.location = { name: '上海' }
    this.isLoading = true
    this.headerConfig  = {title: '城市选择页'}
    this.hotcities = cities.hot
    this.allCities = cities.data.CityMap
    this.captionCity = Object.keys(this.allCities)
    setTimeout(() => {
      this.isLoading = false
    }, 0.25 * 1000)
  }

  select(city) {
    sessionStorage.setItem('currentCity', JSON.stringify(city))
    this.$router.push({
      name: 'movies',
      replace: true
    })
  }
}
