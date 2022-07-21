<template>
    <h2>Contact: {{id}} {{name}} {{age}}</h2>
    <a @click="$router.back()">Back</a>

  <div>
    <div>
      video_id : <input type="text" v-model="temp.video_id" /><br />
      loop : <input type="number"  v-model.number="temp.loop" /><br />
      <button @click="applyConfig">Apply</button>
      <button @click="playCurrentVideo">Play</button>
      <button @click="stopCurrentVideo">Stop</button>
      <button @click="pauseCurrentVideo">Pause</button>
    </div>

   <div :style="styles.widthLimitter">
    <div :style="styles.renderingAreaProvider">  

    <YoutubeVue3 ref="youtube" :videoid="play.video_id" :loop="play.loop" :width="1280" :height="720"
        :controls="1" :style="styles.iframe" frameborder="0" allowfullscreen="true"
      @ended="onEnded" @paused="onPaused" @played="onPlayed"/>

    </div>
    </div>
  </div>
</template>

<script>
import { YoutubeVue3 } from 'youtube-vue3'

export default {
  name: 'Contact',
  props: {
    id: {
        type: String, default:''
    },
    name: {
        type: String, default:''
    },
    age: {
        type: Number, default:0
    },
  },
  data() {
    return {
      temp: { video_id: this.name, loop: 1 },
      play : { video_id: this.name, loop: 1 },
      styles: {
        widthLimitter: {
          maxWidth: this.maxWidth ? this.maxWidth : null
        },
        renderingAreaProvider: {
          background: "#f0f0f0",
          height: 0,
          margin: "1rem 0",
          /*
           * - '56.25%' indicates the aspect rasio (9/16 = 56.25%).
           * - note that percentage inside 'padding-(top|bottom)' is calculated based on
           *   its current width. this is a specification of 'calc' used inside
           *   the 'padding-(top|bottom)' property.
           *
           * see: https://nathan.gs/2018/01/07/responsive-slideshare-iframe/
           */
          paddingBottom: "calc(56.25%)",
          position: "relative",
          width: "100%"
        },
        iframe: {
          height: "100%",
          left: 0,
          position: "absolute",
          top: 0,
          width: "100%"
        }
      }
    }
  },
  components: {
    YoutubeVue3,
  },
  methods: {
    applyConfig() {
      this.play = Object.assign(this.play, this.temp)
    },
    playCurrentVideo() {
      this.$refs.youtube.player.playVideo();
    },
    stopCurrentVideo() {
      this.$refs.youtube.player.stopVideo();
    },
    pauseCurrentVideo() {
      this.$refs.youtube.player.pauseVideo();
    },
    onEnded() {
      console.log("## OnEnded")
    },
    onPaused() {
      console.log("## OnPaused")
    },
    onPlayed() {
      console.log("## OnPlayed")
    },
  },
}
</script>