<template>

  <div class="player-container">
    <h3>想设置空视频时候的poster--无效</h3>
    <video-player ref="myVideo" class="vjs-custom-skin" :options="playerOptions"></video-player>
  </div>
</template>

<script>
  //引入video样式
  import 'video.js/dist/video-js.css'
  import 'vue-video-player/src/custom-theme.css'

  //引入hls.js
  import 'videojs-contrib-hls.js/src/videojs.hlsjs'

  export default {
    name:'HelloWorld',
    data () {
      return {
        playerOptions: {
          height: '360',
          autoplay: true,
          muted: true,
          language: 'en',
          playbackRates: [0.7, 1.0, 1.5, 2.0],
          sources: [],
        }
      }
    },
    mounted(){
      console.log(this.$refs.myVideo.player)
      this.$refs.myVideo.player.poster_='https://surmon-china.github.io/vue-quill-editor/static/images/surmon-1.jpg';
    },
    methods: {

    },
    computed: {

    }
  }
</script>


