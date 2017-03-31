// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './app/App'
import router from './router'
import Component from 'vue-class-component'
import VueVideoPlayer from 'vue-video-player'
import ElementUI from 'element-ui'
require('./styles/main.scss')
// 样式单独引入
import 'element-ui/lib/theme-default/index.css'

Vue.config.productionTip = false
Vue.use(VueVideoPlayer)
Vue.use(ElementUI)
/**
 * 此处为入口文件
 */

/* eslint-disable no-new */

import store from './store/store'

@Component({
  router,
  store,
  template: '<App/>',
  components: { App }
})

export class AppView extends Vue {
  name = 'appView'
}

export default new AppView({
  el: '#app'
})
