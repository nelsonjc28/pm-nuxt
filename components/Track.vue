<template lang="pug">

  .card(v-if="track && track.album")
    .card-image
      figure.image.is-1by1
        img(:src="track.album.images[1].url")
    .card-content
      .media
        .media-left
          figure.image.is-48x48
            img(:src="track.album.images[1].url")

        .media-content
          p.title.is-6
            strong {{track.name}}
          p.subtitle.is-6 {{track.artists[0].name}}

      .container
        .small {{track.duration_ms}}
          nav.level
            .level-left
              button.level-item.button.is-primary(@click="selectTrack")
                span.icon.is-small

                  font-awesome-icon(icon="play")

              nuxt-link.level-item.button.is-info(:to="{ name: 'track-id', params:{id:track.id}}")
                span.icon.is-small
                  font-awesome-icon(icon="info")


</template>

<script>

  export default {
    name: "Track",
    props: {
      track: {type: Object, required: true}
    },
    methods: {
      selectTrack() {
        if (!this.track.preview_url) {
          return
        }
        console.log('hi here')
        this.$store.commit('setTrack', this.track)
      }
    },
    computed:{
    }
  }
</script>

<style scoped>

</style>
