import Component from 'vue-class-component'
import{ BaseView } from '../base.view'
import { Navbar } from '../navbar/index'
import VueDPlayer from 'vue-dplayer'
import { videos } from './mock.videos'
import { LoadingIndicator } from '../../components/loading-indicator/index'
import './style.scss'

@Component({
  template: require('./template.html'),
  components: {
    'd-player': VueDPlayer,
    LoadingIndicator
  },
  data: () => ({
    video: {
      url: 'http://vodcdn.video.taobao.com/oss/taobao-ugc/fb4821e7e9af423b95c52811f4c3a966/1480556533/video.mp4',
      pic: 'https://gw.alicdn.com/i2/TB1CP.5NXXXXXawXXXXXXXXXXXX_.jpg',
      type: 'auto',
      post: 'https://gw.alicdn.com/i4/TB1onyyOXXXXXcrapXXXXXXXXXX_.jpg',
      name: '你的名字',
      msg: '观看： 9000000+'
    },
    videos: null,
    isLoading: Boolean
  }),
})

export default class MoviePlayer extends BaseView {

  mounted () {
    this.player = this.$refs.player.dp
    this.player =  Object.assign(this.player,{
      screenshot: false,
      autoplay: true,
      theme: "#FADFA3",
      loop: false
    })
    this.videos = videos
    this.isLoading = true
    setTimeout(()=> {
      this.isLoading = false
    }, 3 * 1000)
  }

  playIt(item) {
    this.video = item
    this.player.switchVideo({
      url: item.url,
      pic: item.pic,
      type: 'auto'
    })
  }
}
