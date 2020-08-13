<template>
  <v-data-table
    v-model="selected"
    :headers="headers"
    :items="desserts"
    item-key="name"
    class="elevation-1"
  >
    <template v-slot:top>
    </template>
  </v-data-table>
</template>

<style lang="scss">
.v-data-table-header{
  background-color: #bbadad;
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
          },
          { text: '所属', value: 'calories' },
          { text: 'プロジェクト名', value: 'fat' },
          { text: '環境/規模', value: 'carbs' },
          { text: 'メンバー/役割', value: 'protein' },
          { text: '使用スキル', value: 'iron' },
        ],
        desserts: [
          {
            name: '2017/4-2017/7',
            calories: '日立製作所',
            fat: '研修',
            carbs: '-',
            protein: '-',
            iron: '-',
          },
        ],
      }
    },
  }
</script>

