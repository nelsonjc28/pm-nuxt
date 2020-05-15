<template lang="pug">
    div
        header-component
        nuxt
        footer-component
</template>

<script>
  import HeaderComponent from '~/components/Header.vue';
  import FooterComponent from '~/components/FooterComponent.vue';

  export default {
    components:{
      HeaderComponent,
      FooterComponent
    }
  }

</script>


