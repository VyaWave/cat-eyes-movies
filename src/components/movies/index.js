import Component from 'vue-class-component'
import Vue from 'Vue'
import './style.css'

@Component({
  template: require('./template.html')
})

export class MoviesList extends Vue {
  // ..
}

export default MoviesList
