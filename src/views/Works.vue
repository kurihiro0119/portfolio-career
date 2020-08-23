<template>
<v-row class="work-container">
    <div class="work-header">
        <div class="work-header-text">
        <a id="Work"></a>
            <h1>work</h1>
        </div>
    </div>
    <v-row class="work-list">
        <v-col v-for="work in works" :key="work" cols="12" sm="6" md="4" class="padding0">
        <v-card color="#ece3e34f" class="work-list-card" height="100%">
        <v-img 
        v-if="!(work.src === '')"
        v-bind:src="work.src" aspect-ratio="1" contain=True max-height="200px" 
        ></v-img>
         <v-card-text>
             説明：{{work.detail}}
         </v-card-text>
         <v-card-actions>
           <v-btn
             v-if="!(work.git === '')"
             text
             :href="work.git"
             target="_blank"
           >
             Github
            </v-btn>
           <v-btn
             v-if="!(work.qiita === '')"
             text
             :href="work.qiita"
             target="_blank"
           >
             Qiita
           </v-btn>
           <v-btn
             v-if="!(work.demo === '')"
             text
             :href="work.demo"
             target="_blank"
           >
             Demo
           </v-btn>
            </v-card-actions>
        <v-card-text>
             使用スキル：{{work.skill}}
         </v-card-text>
            </v-card>
        </v-col>
     </v-row>
</v-row>
</template>

<style lang="scss">
$cBrack:rgba(0, 0, 0, 0.87);
$cDarkRed:rgba(105, 31, 31, 0.87);
.padding0{
    padding-left: 0px !important;
    padding-right: 0px !important;
}

.work-header {
    width: 100%;
    background-color: $cDarkRed;
    color: white;
    position: relative;
}

.work-header-text {
    margin-left: 5px;
}
.work-content{
    padding: 10px;
    width: 100%;
}
.work-list{
    width: 100%;
    margin: 8px;
    &-detail{
        display: inline;
    }
    &-card{
        margin: 4px;
        padding: 0px !important;
    }
}
.v-image__image, .v-image__placeholder{
    margin: 4px;
}
</style>

<script>
export default {
    data() {
        return {
            color:"rgb(60, 6, 4)",
           works: [
               {src: '/img/kuri.png',
                git:'X',
                qiita:'X',
                demo:'http/google/',
                detail:'XXXXXXXXXXX',
                skill:''},
               {src: '/img/kuri.png',
                git:'https://github.com/kurihiro0119/portfolio-career-frontend',
                qiita:'X',
                demo:'X',
                detail:'',
                skill:''},
               {src: '',
                git:'',
                qiita:'https://qiita.com/',
                demo:'',
                detail:'',
                skill:''},
        ],
        model: 0,
        }
    },
}
</script>
