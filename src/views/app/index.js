import Component from 'vue-class-component'
import{ BaseView } from '../base.view'
import { Navbar } from '../navbar/index'
import './style.scss'

@Component({
  name: 'app',
  template: require('./template.html'),
  data: () => ({
    currentRouter: 'Movies'
  }),
  components: { Navbar }
})

export default class AppView extends BaseView {

  mounted () {
  }
}
