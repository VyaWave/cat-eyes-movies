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
    this.hotcities = cities.data.CityMap.hot
  }
}
