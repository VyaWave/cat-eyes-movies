import Component from 'vue-class-component'
import{ BaseView } from '../base.view'
import './style.scss'

@Component({
  template: require('./template.html')
})

export default class MovieDetail extends BaseView {

  created () {
    this.headerConfig = { title: '影片详情' }
  }
}
