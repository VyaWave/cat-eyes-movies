import Component from 'vue-class-component'
import{ BaseView } from '../base.view'
import './style.scss'

@Component({
  name: 'navbar',
  template: require('./template.html'),
  data: () => ({
  })
})

export class Navbar extends BaseView {

  created () {
  }
}
