import Component from 'vue-class-component'
import{ BaseView } from '../base.view'
import { cinemas } from './mock.ciemas'
import './style.scss'

@Component({
  template: require('./template.html')
})
// 影院列表
export default class CinemasView extends BaseView {

  created () {
    this.cinemas = cinemas
    this.headerConfig  = {title: '影院'}
  }
}
