import Component from 'vue-class-component'
import{ BaseView } from '../base.view'
import { Navbar } from '../navbar/index'
import router from '../../router'
import './style.scss'

@Component({
  name: 'app',
  template: require('./template.html'),

  data: () => ({
    currentRouter: 'Movies',
    shouldShow: true
  }),
  components: { Navbar }
})

export default class AppView extends BaseView {

  mounted () {
    // 路由钩子函数
    router.beforeEach((to, from, next) => {
      switch (to.name) {
        case 'movies':
        case 'profile':
        case 'cinemas':
          this.shouldShow = true
          next();break
        default:
          this.shouldShow = false
          next();break
      }
    })
  }
}
