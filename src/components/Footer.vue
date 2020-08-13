<template>
  <v-footer padless      color="#3C0604"  dark>
    <v-col
      class="text-center"
      cols="12"
    >
      {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
    </v-col>
  </v-footer>
</template>

<style lang="scss">
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