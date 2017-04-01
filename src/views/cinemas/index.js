import Component from 'vue-class-component'
import{ BaseView } from '../base.view'
import { cinemas } from './mock.ciemas'
import { GodService } from '../../service/godService'
import './style.scss'

@Component({
  template: require('./template.html'),
  data: () => ({
    cinemas: null
  })
})
// 影院列表
export default class CinemasView extends BaseView {

  created () {
    this.cinemas = cinemas.data.浦东新区
    this.headerConfig = {title:'影院'}
    this.godService = new GodService()
    this.getCinemasDta()
  }

  getCinemasDta () {
    this.godService.getCinemas()
      .then(cinemas => {
        this.cinemas = cinemas
      })
  }
}
