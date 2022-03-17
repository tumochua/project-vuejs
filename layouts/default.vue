<template>
  <v-app dark class="app-container">
    <Header/>
    <v-main class="main-container">
        <Nuxt />
    </v-main>
    <Footer/>
  </v-app>
</template>

<script>
import Header from '../components/Header/Header.vue'
import Footer from '../components/Footer/Footer.vue'
export default {
  name: 'DefaultLayout',
  data () {
    return {
      
    }
  },
  components: {
    Header,
    Footer
  }
}
</script>
