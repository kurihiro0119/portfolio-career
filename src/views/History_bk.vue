<template>
<v-row class="timeline-container">
  <div class="timeline-header">
 <div class="timeline-header-text">
  <h1>History</h1>
  </div>
  </div>
  <div class="explain">
    <h2>学歴・職歴</h2>
    <ul class="timeline">
       <v-col cols="12">

      <li>
        <v-row>
          <v-col cols="12" md="2" class="y-axis0">
        <p class="timeline-data" >現在
        </p>
          </v-col>
          <v-col cols="12" md="10" class="y-axis0">
        <div class="timeline-content">
          <h3>日本マイクロソフト勤務</h3>
          <p>Azure のサポートエンジニア</p>
        </div>
          </v-col>
        </v-row>
      </li>
      <li>
        <v-row>
          <v-col cols="12" md="2" class="y-axis0">
        <p class="timeline-data" >2020年4月
        </p>
          </v-col>
          <v-col cols="12" md="10" class="y-axis0">
        <div class="timeline-content">
          <h3>日立製作所退社</h3>
          <p></p>
        </div>
          </v-col>
        </v-row>
      </li>
      <li>
        <v-row>
          <v-col cols="12" md="2" class="y-axis0">
        <p class="timeline-data" >2020年4月
        </p>
          </v-col>
          <v-col cols="12" md="10" class="y-axis0">
        <div class="timeline-content">
          <h3>日立製作所退社</h3>
          <p></p>
        </div>
          </v-col>
        </v-row>
      </li>
      <li>
        <v-row>
          <v-col cols="12" md="2" class="y-axis0">
        <p class="timeline-data" >2020年4月
        </p>
          </v-col>
          <v-col cols="12" md="10" class="y-axis0">
        <div class="timeline-content">
          <h3>日立製作所退社</h3>
          <p></p>
        </div>
          </v-col>
        </v-row>
      </li>
       </v-col>
    </ul>
  </div>
</v-row>
</template>

<style lang="scss">
$cBrack:rgba(0, 0, 0, 0.87);
$cDarkRed:rgba(105, 31, 31, 0.87);

ul{
  list-style: none;
}
li{
  width: 100%;
}
.y-axis0{
    padding-top: 0px;
    padding-bottom: 0px;
}
.timeline-header{
    width: 100%;
    background-color: $cDarkRed;
    color: white;
    position: relative;
    margin-bottom: 10px;
}
.timeline{
  display: flex;
}
.timeline-header-text{
    margin-left: 5px;
}
.explain {
    margin-right: 15px;
    margin-left: 15px;
    padding: 30px;
    margin-bottom: 15px;
    width: 100%;
}
@media (min-width: 760px){
.timeline-data{
  font-size: 1.2rem;
    width: 110px;
    float: left;
    margin-top: 20px;
  }
}
@media (min-width: 768px){
.timeline-content {
    width: 75%;
    float: left;
    border-left: solid 3px black;
    padding-left: 30px;
  }
}

</style>

<script>
export default {
  name: "HelloWorld",

  data: () => ({
  })
};
</script>
