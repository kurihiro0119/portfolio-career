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
      <li>
        <p class="timeline-date">現在</p>
        <div class="timeline-content">
          <h3>日本マイクロソフト入社</h3>
          <p>Azure のサポートエンジニア</p>
        </div>
      </li>
      <li>
        <p class="timeline-date">2020年4月</p>
        <div class="timeline-content">
          <h3>日立製作所退社</h3>
          <p>退社</p>
        </div>
      </li>
      <li>
        <p class="timeline-date">2020年4月</p>
        <div class="timeline-content">
          <h3>日立製作所退社</h3>
          <p>退社</p>
        </div>
      </li>
      <li>
        <p class="timeline-date">2020年4月</p>
        <div class="timeline-content">
          <h3>日立製作所退社</h3>
          <p>退社</p>
        </div>
      </li>
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
.timeline li {
    overflow: hidden;
    margin: 0;
    position: relative;
}
.timeline p {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
}
.timeline-header{
    width: 100%;
    background-color: $cDarkRed;
    color: white;
    position: relative;
    margin-bottom: 10px;
}
.timeline-date{
  font-size: 1rem;
 }

.timeline-header-text{
    margin-left: 5px;
}
.explain {
    margin-right: 15px;
    margin-left: 15px;
    padding: 30px;
    width: 100%;
    background-color: #efe6e6;
}
@media (min-width: 760px){
.timeline-date{
  font-size: 1.2rem;
    width: 110px;
    float: left;
    margin-top: 20px !important;
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
