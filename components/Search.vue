<template lang="pug">
   main


      section.section
          nav.nav.has-shadow
              .container
                  .columns.is-multiline
                      .column.is-11
                          input.input.is-large(type="text"  v-model="searchQuery", @keyup.enter="search")
                      .column.is-1
                          .field.has-addons
                              a.button.is-primary.is-large(@click="search") Buscar
                              a.button.is-danger.is-large(@click="clear") &times
                      .column
                          p.small {{searchMessage}}

              .container
                  .columns.is-multiline
                     .column.is-2.is-vcentered.is-offset-5(v-if="isLoading")
                         propagate-loader.spiner-centered(color="#48c774" :size="30" :loading="isLoading")

                     .column.is-2.is-vcentered.is-offset-5(v-if="isLoading")
                     .column.is-4(v-for="track in tracks" )
                         track-component(:class="{'is-active': track.id === selectedTrack}",
                            v-blur="track.preview_url",
                           :track="track",
                            @selectTrack="setSelectedTrack")








</template>

<script>

  import trackService from "~/plugins/track";
  import trackComponent from "~/components/Track";

  export default {
    name: 'SearchComponent',
    data() {
      return {
        notificationMsg: '',
        searchQuery: '',
        tracks: [],
        isLoading: false,
        showNotification: false,
        selectedTrack: '',
        isSuccessNotification: false
      }
    },
    mounted() {
    },
    methods: {
      search() {
        if (this.searchQuery) {

          this.isLoading = true

          trackService.search(this.searchQuery)
            .then(res => {
              this.isLoading = false
              this.tracks = res.tracks.items
              this.isNotification(res.tracks.total)
            })
        }
      },
      // isNotification(total) {
      //   this.showNotification = true
      //   if (total === 0) {
      //     this.$toast.error('No se encontraron resultados!');
      //     this.notificationMsg = 'No se encontraron resultados!'
      //   } else {
      //     this.$toast.success(`${total} resultados encontrados!`);
      //     this.notificationMsg = `${total} resultados encontrados!`
      //     this.isSuccessNotification = true
      //
      //   }
      // },

      clear() {
        this.searchQuery = ""
        this.tracks = []
      },
      setSelectedTrack(id) {
        this.selectedTrack = id
      }

    },
    computed: {
      searchMessage() {
        return `Encontrados ${this.tracks.length}`
      }
    },
    watch: {
      showNotification() {
        if (this.showNotification) {
          setTimeout(() => {
            this.showNotification = false
            this.notificationMsg = ''
            this.isSuccessNotification = false

          }, 3000)
        }
      },
    },
    components: {
      trackComponent
    }
  }
</script>

<style lang="scss">

  .spiner-centered {
    position: relative;
    left: 85px;
  }

  .is-active {
    border: 3px #48c774 solid;
  }
</style>
