<template>
  <v-footer padless color="#3C0604"  dark>
    <v-col
      class="text-center"
      cols="12"
    >
      {{ new Date().getFullYear() }} — <strong>Engineer Career Service</strong>
    </v-col>
  </v-footer>
</template>

<style lang="scss">
.v-footer{
  height: 75px;
}

@media (min-width: 960px) {
  .v-footer{
    height: 150px !important;
  }
}
</style>

<script>
export default {
  name: "Footer",

  data(){
    return{
    }
  },
};
</script>