import Component from 'vue-class-component'
import{ BaseView } from '../base.view'
import { Navbar } from '../navbar/index'
import './style.scss'

@Component({
  template: require('./template.html'),
  data: () => ({
    currentRouter: 'Movies'
  }),
  components: { Navbar },
  props: {
    sourceUrl: {
      type: String,
      default: 'wwww.baidu.com'
    }
  }
})

export default class MoviePlayer extends BaseView {

  mounted () {
    console.log('movie player', this.sourceUrl)
  }
}
