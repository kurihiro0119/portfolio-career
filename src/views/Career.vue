<template>
  <v-data-table
    v-model="selected"
    :headers="headers"
    :items="desserts"
    item-key="name"
    class="elevation-1"
    width="100%"
    loading=true
    calculate-widths=true
    loading-text="Loading... Please wait"
  >
    <template v-slot:top>
    </template>
  </v-data-table>
</template>

<style lang="scss">
.v-data-table-header{
  background-color: #bbadad;
}
.v-data-table__mobile-row {
    margin-top: 10px;
    margin-bottom: 10px;
}
.v-data-table__mobile-row__header {
    width: 100px;
}
.v-data-table__mobile-row__cell {
    text-align: left !important;
    width: 200px;
}
@media(min-width: 480px){
  .v-data-table{
     white-space: pre;
  }
}
</style>

<script>
  export default {
    data () {
      return {
        singleSelect: false,
        selected: [],
        headers: [
          {
            text: '期間',
            align: 'start',
            sortable: false,
            value: 'name',
            width:'10%'
          },
          { text: '所属', value: 'calories' , width:'10%'},
          { text: 'プロジェクト', value: 'project', width:'15%' },
          { text: 'メンバー/役割', value: 'role', width:'10%' },
          { text: '使用スキル', value: 'skill', width:'10%'  },
        ],
        desserts: [
          {
            name: '2017/4-2017/6',
            calories: '日立製作所',
            project: '情報技術研修\nJava アプリケーション開発',
            role: '-',
            skill: 'Java',
          },
          {
            name: '2017/7-2017/8',
            calories: '日立製作所',
            project: 'メールサービス Exchange 保守・運用\nトラブルシューティング \n 運用手順書の作成',
            role: '・保守\n・運用',
            skill: '-',
          },
          {
            name: '2017/9-2018/5',
            calories: '日立製作所',
            project: 'Webサービス「ビジネスメディア取引」\nの基盤サーバのリプレース\n保守・運用\n・新機能の開発\n・テスト',
            role: '・保守\n・運用\n・開発\n・テスト項目作成/テスト担当',
            skill: 'linux\npostgreSQL\nVBA\nHirDB',
          },
          {
            name: '2018/6-2018/9',
            calories: '日立製作所',
            project: '研修',
            role: '-',
            skill: '-',
          },
          {
            name: '2018/10-2019/3',
            calories: '日立製作所',
            project: '研修',
            role: '-',
            skill: '-',
          },
          {
            name: '2019/4-2019/9',
            calories: '日立製作所',
            project: '研修',
            role: '-',
            skill: '-',
          },
          {
            name: '2019/10-2019/12',
            calories: '日立製作所',
            project: '研修',
            role: '-',
            skill: '-',
          },
          {
            name: '2020/1-現在',
            calories: '日立製作所',
            project: '研修',
            role: '-',
            skill: '-',
          },
        ],
      }
    },
  }
</script>

