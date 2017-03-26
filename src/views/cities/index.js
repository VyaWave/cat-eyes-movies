import Component from 'vue-class-component'
import Vue from 'Vue'
import './style.scss'
import { cities } from './mock.cities'

@Component({
  template: require('./template.html')
})

export default class CitiesChooser extends Vue {
  created () {
    // 城市数据
    this.hotcities = cities.hot
    this.allCities = cities.data.CityMap
    this.captionCity = Object.keys(this.allCities)
  }
}
