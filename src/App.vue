<template>
  <v-app id="inspire">
        <Header/>
    <v-main>
      <v-container
        fluid
      >
          <router-view/>
      </v-container>
    </v-main>
    <Footer/>
  </v-app>
</template>

<style lang="scss">
.v-application--wrap{
  background-color:#FBF7F1 !important;
}

@import url('https://fonts.googleapis.com/css?family=Kameron:400,700|Noto+Sans+JP&display=swap');
#inspire{
  font-family: "Kameron", "Noto Sans JP", sans-serif !important;
}
</style>

<script>
import Header from './components/Header';
import Footer from './components/Footer';

  export default {
    props: {
      source: String,
    },
    components:{
      Header,
      Footer
    },
    data: () => ({
    }),
  }
</script>