import Component from 'vue-class-component'
import Vue from 'Vue'
import './style.scss'
import {mapState, mapActions} from 'vuex'

@Component({
  template: require('./template.html'),
  methods: {
    ...mapActions({
      getlist: 'getSchoolActivity'
    })

  },
  computed: {
    ...mapState({
      'test': state => state.moviesListVuex.test,
      'loading': state => state.moviesListVuex.loading
    })
  }
})

export default class MoviesList extends Vue {
  created () {
    this.getlist()
  }
  bindEvent () {
    console.log('绑定方法写在这里')
  }
}
