<template>
  <v-app id="inspire">
        <Header/>
    <v-main>
      <v-container
        fluid
      >
          <Profile/>
          <Skill/>
          <History/>
          <Works/>
      </v-container>
    </v-main>
    <Footer/>
  </v-app>
</template>

<style lang="scss">

.container{
  max-width: none;
}
.v-application--wrap{
  background-color:#FBF7F1 !important;
}
.v-main{
  padding-top: 0px !important;
}

@import url('https://fonts.googleapis.com/css?family=Kameron:400,700|Noto+Sans+JP&display=swap');
#inspire{
  font-family: "Kameron", "Noto Sans JP", sans-serif !important;
}
</style>

<script>
import Header from './components/Header';
import Footer from './components/Footer';
import Profile from './views/Profile';
import Skill from './views/Skill';
import History from './views/History';
import Works from './views/Works';

  export default {
    props: {
      source: String,
    },
    components:{
      Header,
      Footer,
      Profile,
      Skill,
      History,
      Works
    },
    data: () => ({
    }),
  }
</script>