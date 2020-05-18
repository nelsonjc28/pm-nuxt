<template lang="pug">
    .content(v-if="track && track.album")
        p.is128x128
            img(:src="track.album.images[0].url")
        p
            strong {{track.name}}
            small {{track.duration_ms}}

        p
            audio(  controls, :src="track.preview_url")


</template>

<script>
  import {mapState} from  'vuex'
  export default {
    name: "PlayerComponent",
    computed: {
      ...mapState(['track']),
    }
  }
</script>

<style scoped>
  img {
    width: 124px;
    border-radius: 50%;
  }

  .content {
    margin-top: 15px;
  }
</style>
