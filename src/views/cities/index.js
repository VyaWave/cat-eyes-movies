import Component from 'vue-class-component'
import{ BaseView } from '../baseview'
import { cities } from './mock.cities'
import './style.scss'

@Component({
  template: require('./template.html')
})

export default class CitiesChooser extends BaseView {
  created () {
    // 城市数据
    this.headerConfig  = {title: '城市选择页'}
    this.hotcities = cities.hot
    this.allCities = cities.data.CityMap
    this.captionCity = Object.keys(this.allCities)
  }
}
