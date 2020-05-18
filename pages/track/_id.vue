<template lang="pug">
  .container
      .columns.is-multiline

          .column.is-3.has-text-centered
              figure.media-left
                p.image
                  img(v-if="track && track.album", :src="track.album.images[0].url")


      .column.is-8
          .panel
              .panel-heading
                  h1.title {{trackTitle}}
              .panel-block
                  article.media
                  .media-content
                      .content
                          ul(v-for="(value,index) in track")
                              li
                                  strong {{index}}:&nbsp;
                                  span {{value}}


</template>

<script>
  import {mapState,mapGetters,mapActions} from 'vuex'


  export default {
    name: "TrackDetail",
    data: function () {
      return {
      }
    },
    mounted() {
      const id = this.$route.params.id
      if(id != this.track.id){
        this.getTrackById({id})
      }

    },
    head() {
      return {
        title:this.track.name
      };
    },
    computed:{
      ...mapGetters(["trackTitle"]),
      ...mapState(["track"])
    },
    methods:{
      ...mapActions(["getTrackById"])

    }

  }
</script>

<style lang="scss" scoped>
  .columns {
    margin: 20px;
  }

  .spiner-centered {
    position: relative;
    left: 85px;
  }

  .button {
    margin-top: 10px
  }
</style>
