<template>
    <video-player  ref="videoPlayer"
      :options="playerOptions"
    >
  </video-player>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      playerOptions: {

        // component options
        start: 0,
        playsinline: false,

        // videojs options
        muted: true,
        language: 'en',
        playbackRates: [0.7, 1.0, 1.5, 2.0],
        sources: [{
          type: 'video/mp4',
          src: 'http://vodcdn.video.taobao.com/oss/taobao-ugc/85b9f21f2d3b4d7cae302263574013d5/1489937235/video.mp4'
        }],
        poster: 'http://p1.meituan.net/movie/9a1bfb5e2abc6908096d91b9d95eb91427121.jpg'
      }
    }
  },
  mounted () {
    console.log('this is current player instance object', this.player)
  },
  computed: {
    player () {
      return this.$refs.videoPlayer.player
    }
  },
  methods: {
    // listen event
    onPlayerPlay (player) {
      // console.log('player play!', player)
    },
    onPlayerPause (player) {
      // console.log('player pause!', player)
    },
    // ...player event

    // or listen state event
    playerStateChanged (playerCurrentState) {
      // console.log('player current update state', playerCurrentState)
    },

    // player is ready
    playerReadied (player) {
      console.log('the player is readied', player)
      // you can use it to do something...
      // player.[methods]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .video-player{
    width: 100%;
  }
</style>
