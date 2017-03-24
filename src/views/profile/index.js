import Component from 'vue-class-component'
import Vue from 'Vue'
import './style.scss'
// import { cinemas } from './mock.ciemas'

@Component({
  template: require('./template.html')
})

export default class CinemasView extends Vue {

  created () {
    // this.cinemas = cinemas
  }
}
