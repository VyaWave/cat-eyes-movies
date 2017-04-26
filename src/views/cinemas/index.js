import Component from 'vue-class-component'
import{ BaseView } from '../base.view'
import { cinemas } from './mock.ciemas'
import { GodService } from '../../service/godService'
import { sort } from '../../utils/sort'
import { LoadingIndicator } from '../../components/loading-indicator/index'
import './style.scss'

@Component({
  template: require('./template.html'),
  data: () => ({
    cinemas: null,
    isLoading: Boolean
  }),
  components: {LoadingIndicator}
})
// 影院列表
export default class CinemasView extends BaseView {

  created () {
    this.isLoading = true
    this.headerConfig = {title:'影院'}
    this.godService = new GodService()
    this.getCinemasDta()
  }

  getCinemasDta () {
    this.godService.getCinemas()
      .distinctUntilChanged()
      .subscribe(cinemas => {
        console.info('影院数据已更新')
        this.cinemas = cinemas
        this.isLoading = false
      })
  }
}
