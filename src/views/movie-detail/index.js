import Component from 'vue-class-component'
import{ BaseView } from '../base.view'
import { LoadingIndicator } from '../../components/loading-indicator/index'
import './style.scss'

@Component({
  template: require('./template.html'),
  data: () => ({
    isLoading: Boolean
  }),
  components: {LoadingIndicator},
})

export default class MovieDetail extends BaseView {

  created () {
    this.isLoading = true
    this.headerConfig = { title: '影片详情' }
    setTimeout(()=> {
      this.isLoading = false
    }, 1000 * 0.3)
  }
}
