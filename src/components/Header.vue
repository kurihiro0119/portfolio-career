<template>
  <v-container>
    <v-navigation-drawer
      v-model="drawer"
      :clipped="$vuetify.breakpoint.lgAndUp"
      app
      width="200px"
    >
      <v-list dense>
        <template v-for="item in items">
          <v-list-item
            :key="item.text"
            link
          >
            <v-list-item-content>
              <router-link :to="{name: item.path}" >
              <v-list-item-title v-on:click="change(item.text)" class="item-text">
                {{ item.text }}
              </v-list-item-title>
              </router-link>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      app
      color="#9C0707"
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title
        style="width: 100%"
        class="ml-0 pl-4"
      >
        <span class="header-title" >{{theme}}</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>
  </v-container>
</template>

<style lang="scss">
.v-list-item__title{
  color: #000;
}
a{
    text-decoration: none;
}
.header-title{
  font-size :2rem;
}
.item-text{
  font-size: 1rem !important;
    line-height: 1.2rem !important;
}

@media (min-width: 960px) {
.header-title{
  font-size :3rem;
}
}
</style>

<script>
export default {
  name: "Header",

  data(){
    return{
      theme: '基本情報',
      dialog: false,
      drawer: null,
      items: [
        {path:'BasicInfo',  text: '基本情報' },
        {path:'Career',  text: '経歴' },
        {path:'', text: 'スキル' },
        {path:'',  text: 'ポートフォリオ' },
        {path:'',  text: 'QiitA' },
        {path:'',  text: '学歴' },
        {path:'',  text: '資格' },
        {path:'',  text: '語彙力' },
        {path:'',  text: '特記事項' },
      ],
    }
  },
      methods:{
      change: function(text){
        this.theme = text;
      }
    }
};
</script>