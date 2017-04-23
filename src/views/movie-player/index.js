import Component from 'vue-class-component'
import{ BaseView } from '../base.view'
import { Navbar } from '../navbar/index'
import VueDPlayer from 'vue-dplayer'
import { videos } from './mock.videos'
import './style.scss'

@Component({
  template: require('./template.html'),
  components: {
    'd-player': VueDPlayer
  },
  data: () => ({
    video: {
      url: 'http://vodcdn.video.taobao.com/oss/taobao-ugc/fb4821e7e9af423b95c52811f4c3a966/1480556533/video.mp4',
      pic: 'https://gw.alicdn.com/i2/TB1CP.5NXXXXXawXXXXXXXXXXXX_.jpg',
      type: 'auto'
    },
    videos: null
  }),
})

export default class MoviePlayer extends BaseView {

  mounted () {
    let player = this.$refs.player.dp
    player =  Object.assign(player,{
      screenshot: false,
      autoplay: true,
      theme: "#FADFA3",
      loop: false
    })
    this.videos = videos
  }

  playIt(item) {
    this.video = item
  }
}
