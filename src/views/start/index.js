import Component from 'vue-class-component'
import{ BaseView } from '../baseview'
import './style.scss'

@Component({
  template: require('./template.html')
})

export default class StartView extends BaseView {
  // ..
  created () {
    this.headerConfig  = {title: '猫眼电影o.O 好电影,一网打尽'}

    setTimeout(() => {
      // vue1 => vue2/go => push
      this.$router.push({
        name: 'movies'
      })
    }, 3*1000)
  }
}
