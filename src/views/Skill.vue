<template>
<v-row class="skill-container">
  <div class="skill-header">
    <div class="skill-header-text">
     <h1>Skill</h1>
    </div>
  </div >
  <div class="skill-content">
  <h2>Main</h2>
    <v-simple-table>
      <template v-slot:default>
        <thead >
          <tr >
            <th class="text-center skill-text-size">技術</th>
            <th class="text-center skill-text-size">経験年数</th>
            <th class="text-center skill-text-size">スキル</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in desserts" :key="item.name">
            <td class="skill-text-size">{{ item.name }}</td>
            <td class="skill-text-size">{{ item.period }}年</td>
            <td>
              <v-rating
                  v-model="item.rate"
                  :size="size"
                  :readonly="readonly"
                  :color="color"
                  :background-color= "bgcolor"
                ></v-rating>
            </td>
          </tr>
        </tbody>
        <div>
        </div>
      </template>
    </v-simple-table>
    <h2>Sub</h2>
    <div class="subskill">
    <div v-for="skill in subskill" :key="skill" class="skill-text-size-sub">{{skill}}  </div>
    </div>
    <h2>資格</h2>
    <div class="qualification">
    <div v-for="qualification in qualifications" :key="qualification" class="skill-text-size-qualification">{{qualification}}  </div>
    </div>
  </div>
</v-row>
</template>

<style lang="scss">
$cBrack:rgba(0, 0, 0, 0.87);
$cDarkRed:rgba(105, 31, 31, 0.87);

.other-content{
  padding: 8px;
  margin-bottom: 16px;
}
.skill-header{
    width: 100%;
    background-color: $cDarkRed;
    color: white;
    position: relative;
    margin-bottom: 10px;

    &-text{
          margin-left: 5px;
    }
}
.skill-content{
    padding: 10px;
    width: 100%;
}

.skill-text-size{
    font-size:0.8rem !important;
    &-sub{
      font-size: 0.8rem;
      display: inline;
    }
    &-qualification{
      font-size: 0.8rem;
      display: inline;
    }
    
}
.v-icon.v-icon{
  font-size: 1rem;
  padding: 2px !important;
}
.v-data-table {
    line-height: 1.5;
    max-width: 100%;
    text-align: center;
    background-color: transparent !important;
}
.data-table-header{
  font-size: 1rem !important;
}

.subskill{
  @extend .other-content
}
.qualification{
  @extend .other-content
}

@media(min-width: 480px){
  .programing-skill-thema{
    position:absolute;
    top: 50%;
    color: blacks;
}
.skill-text-size{
    font-size:1rem !important;
    &-sub{
      font-size: 1.2rem;
    }
    &-qualification{
      font-size: 1.2rem;
    }
}
.v-icon.v-icon{
  font-size: 1.3rem;
  padding: 8px !important;
}
}

</style>
<script>
export default {
  data (){
    return{
      readonly:true,
      color:"rgba(105, 31, 31, 0.87)",
      bgcolor:"grey lighten-1",
      desserts: [
        {
          name: 'Java',
          period: 1,
          rate: 3,
        },
        {
          name: 'C#',
          period: 1,
          rate: 2,
        },
        {
          name: 'python',
          period: 1,
          rate: 3,
        },
        {
          name: 'django',
          period: 1,
          rate: 2,
        },
        {
          name: 'JavaScript',
          period: 1,
          rate: 2,
        },
        {
          name: 'Vue.js',
          period: 1,
          rate: 2,
        },
        {
          name: 'HTML',
          period: 1,
          rate: 2,
        },
        {
          name: 'CSS',
          period: 1,
          rate: 1,
        },
      ],
      subskill:[
        "Scss",
        "Apache",
        "Tomcat",
        "nginx",
        "firebase",
        "firebase",
        "firebase",
        "firebase",
        "firebase",
        "firebase",
        "firebase",
        "firebase",
        "firebase",
        "firebase",
      ],
      qualifications:[
        "応用情報技術者試験",
      ]
    }
  },
};
</script>
