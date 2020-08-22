<template>
<v-row class="timeline-container">
  <div class="timeline-header">
    <div class="timeline-header-text">
     <h1>History</h1>
    </div>
  </div>
  <div class="history-container">
    <h2 class="timeline-thema">学歴・職歴</h2>
    <v-timeline
      :align-top="alignTop"
      :dense="dense"
      :reverse="reverse"
    >
      <v-timeline-item
        v-for="time in timeline"
        :key="time"
        :fill-dot="fillDot"
        :hide-dot="hideDot"
        :color="color"
        :left="left"
        :right="right"
        :small="small"
      >
          <h3 class="headline">{{time.date}}</h3>
            <h4 class="timeline-text">
            {{time.text}}
            </h4>
            <h4 v-if="!(time.skill === '')"  class="timeline-text">
              使用スキル：{{time.skill}}
            </h4>

      </v-timeline-item>
    </v-timeline>
  </div>
</v-row>
</template>

<style lang="scss">
$cBrack:rgba(0, 0, 0, 0.87);
$cDarkRed:rgba(105, 31, 31, 0.87);

.timeline-header{
    width: 100%;
    background-color: $cDarkRed;
    color: white;
    position: relative;
    margin-bottom: 10px;
}
.timeline-thema{
  margin: 8px;
  padding-left: 8px;
}

.timeline-header-text{
    margin-left: 5px;
}
.v-timeline:before {
    width: 4px !important;
    background-color: black !important;
}
.timeline-text{
  margin: 6px;
}

.history-container {
    width: 100%;
    margin: 10px;
    background-color: #ece5e5;
}
</style>

<script>
export default {
  name: "HelloWorld",

  data() {
    return{
    alignTop: false,
    avatar: false,
    dense: true,
    fillDot: true,
    hideDot: true,
    icon: false,
    color: "rgb(60, 6, 4)",
    left: false,
    reverse: false,
    right: false,
    small: true,
    timeline:[
      {
        date:'2020年5月〜現在',
        text:'マイクロソフト CSSサポート',
        skill:''
      },
      {
        date:'2020年4月',
        text:'日立製作所退社',
        skill:''
      },
      {
        date:'2019年4月〜2020年4月',
        text:'工場向けデータ一元管理システムの開発',
        skill:'Vue.js, elemental-ui'
      },
    ]
    }
  }
};
</script>
