<template>
  <v-container>
    <div class="programing-skill">
      <v-row>
        <v-col cols="12" md="4" class="programing-skill-thema">
          <h3>
            programing skill
          </h3>
        </v-col>
        <v-col cols="12" md="8" class="programing-skill-list">
              <h3>html</h3>
                  <v-rating
                  v-model="rating"
                background-color="green lighten-3"
                color="green"
                large
                 ></v-rating>
        </v-col>

      </v-row>
    </div>
  </v-container>
</template>

<style lang="scss">
.programing-skill{
background-color: #666;
    color: white;
    position: relative;
}
.programing-skill-thema{
  text-align: left;
  margin-left: 5px;
    border-bottom: 1px solid #e5e5e5!important;
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
  name: "HelloWorld",

  data: () => ({
  })
};
</script>
