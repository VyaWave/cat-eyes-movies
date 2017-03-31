import Component from 'vue-class-component'
import{ BaseView } from '../base.view'
import './style.scss'
// import { cinemas } from './mock.ciemas'

@Component({
  template: require('./template.html')
})

export default class CinemasView extends BaseView {

  created () {
     this.headerConfig  = {title: '我的'}
  }
}
