<template>
<v-row class="skill-container">
  <div class="skill-header">
    <div class="skill-header-text">
     <h1>Skill</h1>
    </div>
  </div >
  <div class="skill-content">
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">Name</th>
            <th class="text-left">Calories</th>
            <th class="text-left">Calories</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in desserts" :key="item.name">
            <td>{{ item.name }}</td>
            <td>{{ item.calories }}</td>
            <td>{{ item.calories }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>

  </div>
</v-row>
</template>

<style lang="scss">
$cBrack:rgba(0, 0, 0, 0.87);
$cDarkRed:rgba(105, 31, 31, 0.87);

.skill-header{
    width: 100%;
    background-color: $cDarkRed;
    color: white;
    position: relative;
    margin-bottom: 10px;
}

.skill-header-text{
    margin-left: 5px;
}

.skill-content{
    margin-right: 15px;
    margin-left: 15px;
    padding: 30px;
    width: 100%;
}
@media(min-width: 480px){
  .programing-skill-thema{
    position:absolute;
    top: 50%;
    color: blacks;
}
}

</style>
<script>
export default {
  data (){
    return{

      desserts: [
        {
          name: 'Frozen Yogurt',
          calories: 159,
        },
        {
          name: 'Ice cream sandwich',
          calories: 237,
        },
        {
          name: 'Eclair',
          calories: 262,
        },
        {
          name: 'Cupcake',
          calories: 305,
        },
        {
          name: 'Gingerbread',
          calories: 356,
        },
        {
          name: 'Jelly bean',
          calories: 375,
        },
        {
          name: 'Lollipop',
          calories: 392,
        },
        {
          name: 'Honeycomb',
          calories: 408,
        },
        {
          name: 'Donut',
          calories: 452,
        },
        {
          name: 'KitKat',
          calories: 518,
        },
      ],
    }
  },
};
</script>
