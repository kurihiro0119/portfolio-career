<template>
<v-row class="profile-container">
    <v-col cols="12">
        <v-row class="profile-container__inner">
            <v-col cols="12" md="6" class="">
                <v-carousel cycle height="100%" hide-delimiter-background show-arrows-on-hover>
                    <v-carousel-item v-for="(slide, i) in slides" :key="i">
                        <v-sheet color="rgb(60, 6, 4)" height="100%">
                            <v-row class="fill-height" align="center" justify="center">
                                <v-img v-bind:src="slide.src" aspect-ratio="1.7" contain=True max-height="300px"></v-img>
                            </v-row>
                        </v-sheet>
                    </v-carousel-item>
                </v-carousel>
            </v-col>
            <v-col cols="12" md="6">
                <v-card class="mx-auto" height="100%"  color="#ece7e7">
                    <v-card-text>
                        <p>Name</p>
                        <p class="information">
                            ・{{name}}
                        </p>
                        <v-divider></v-divider>
                        <p class="information">
                            ・ {{englishName}}
                        </p>
                        <v-divider></v-divider>
                        <v-row>
                            <v-col cols="6">
                                <div>Birth</div>
                                <div class="information">・{{birth}}<br>
                                </div>
                                <v-divider></v-divider>
                            </v-col>
                            <v-col cols="6">
                                <div>Age</div>
                                <div class="information">・{{age}}<br>
                                </div>
                                <v-divider></v-divider>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="6">
                                <div>Address</div>
                                <div class="information">・{{address}}<br>
                                </div>
                                <v-divider></v-divider>
                            </v-col>
                            <v-col cols="6">
                                <div>Sex</div>
                                <div class="information">・{{sex}}<br>
                                </div>
                                <v-divider></v-divider>
                            </v-col>
                        </v-row>
                    </v-card-text>
                    <v-card-actions>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-col>
    <v-col cols="12" md="6">
        <v-card class="mx-auto" height="auto" color="#ece7e7">
            <v-card-text>
                <div class="question">職種は？<br>
                </div>
                <v-divider></v-divider>
                <div class="answer">・{{occupation}}<br>
                </div>
            </v-card-text>
        </v-card>
    </v-col>
    <v-col cols="12" md="6">
        <v-card class="mx-auto" height="auto" color="#ece7e7">
            <v-card-text>
                <div class="question">所属は？<br>
                </div>
                <v-divider></v-divider>
                <div class="answer">・{{organization}}<br>
                </div>
            </v-card-text>
        </v-card>
    </v-col>
    <v-col cols="12">
      <router-link :to="{name: 'Career'}" class="link" >
          <v-card class="mx-auto" height="auto" color="#ece7e7" v-on:click="change(item.text)">
            <v-card-text >
                <div class="question">経歴は？
                        <br>
                </div>
                <v-divider></v-divider>
                       <div class="summary__text">{{carrer}}<br>
                        </div>
            </v-card-text>
        </v-card>
        </router-link>
    </v-col>
    <v-col cols="12">
         <router-link :to="{name: 'Career'}" class="link" >
            <v-card class="mx-auto" height="auto" color="#ece7e7">
                <v-card-text>
                    <div class="question">何したの？<br>
                    </div>
                    <v-divider></v-divider>
                    <div class="summary__text">{{summary}}<br>
                    </div>
             </v-card-text>
            </v-card>
         </router-link>
    </v-col>
</v-row>
</template>

<style lang="scss">
$cBrack:rgba(0, 0, 0, 0.87);
$cDarkRed:rgba(105, 31, 31, 0.87);

.v-application p {
    margin-top: 8px;
    margin-bottom: 8px;
}

.information {
    font-size: 1rem;
    color: $cBrack !important;
}

.question {
    margin-bottom: 8px;
    font-size: 1rem;
    color: $cBrack !important;
}

.answer {
    margin-top: 8px;
    margin-bottom: 8px;
    font-size: 1.2rem;
    color: $cBrack !important;
}

.link {
    font-size: 1.2rem;
        color: $cBrack !important;
        right: 0;
}

img {
    background-color: gray;
    object-fit: contain;
}

.summary {
    margin-top: 4px;
    margin-bottom: 4px;
    font-size: 1rem;
    color: $cBrack !important;
}

.summary__text {
    margin-top: 4px;
    margin-bottom: 4px;
    font-size: 0.7rem;
    color: $cBrack !important;
    white-space: pre-wrap;
    word-wrap: break-word;
}
@media (min-width: 480px) {
.information {
    font-size: 1.2rem;
}

.question {
    margin-bottom: 16px;
    font-size: 1.2rem;
}

.answer {
    margin-top: 16px;
    margin-bottom: 16px;
    font-size: 1.5rem;
}

.summary {
    margin-top: 8px;
    margin-bottom: 8px;
    font-size: 1.5rem;
}

.summary__text {
    margin-top: 8px;
    margin-bottom: 8px;
    font-size: 1rem;
}
}
</style>

<script>
export default {
    data() {
        return {
            hover:false,
            name: "栗原 啓成",
            englishName: "Kurihara Hironari",
            birth: "1992/1/19",
            age: "28",
            address: "Tokyo",
            sex: "Man",
            occupation: "Azure Support Enginner!",
            organization: "日本マイクロソフト",
            // carrer:"a",
            // summary:"b",
            carrer: `2017年4月〜2020年4月 日立製作所 SE
2020年5月〜現在 日本マイクロソフト サポートエンジニア`,
            summary: `日立では工場向けのwebアプリケーションやシステムの開発をしていました。
・工場設備の故障をリアルタイムで予兆するWebアプリ　
・工場現場の業務データをクレンジングし、一元管理するシステム
・現場データを編集するWebアプリ

マイクロソフトでは、azureの技術サポートをしています。
・担当製品 Azure Monitor `,
            slides: [{
                    src: '/img/troupe.jpg',
                    text: '1'
                },
                {
                    src: '/img/frankfurt.jpg',
                    text: '2'
                },
                {
                    src: '/img/iikimoti.jpg',
                    text: '3'
                },
                {
                    src: '/img/beforeFKK.jpg',
                    text: '4'
                },
            ],
        }
    },
}
</script>
