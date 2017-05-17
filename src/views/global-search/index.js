import { LoadingIndicator } from '../../components/loading-indicator/index'
import Component from 'vue-class-component'
import{ BaseView } from '../base.view'
import './style.scss'

@Component({
  template: require('./template.html'),
  components:{LoadingIndicator},
  data: () => ({
    isLoading: Boolean
  })
})

export default class GlobalSerch extends BaseView {

  created () {
    this.isLoading = true
    this.headerConfig  = {title:'全局搜索'}
    setTimeout(() => {
      this.isLoading = false
    }, 1000 * 0.8)
  }
}
