import Component from 'vue-class-component'
import{ BaseView } from '../base.view'
import './style.scss'

@Component({
  template: require('./template.html'),
  data: () => ({
  })
})
// 影院列表
export default class NavbarView extends BaseView {

  created () {
    console.log(11)
  }
}
