<template>
<v-row class="profile-container">
    <div class="profile-header">
        <div class="profile-header-text">
            <a id="Profile"></a>
            <h1>Profile</h1>
        </div>
    </div>
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
                <div class="mx-auto" height="100%" color="rgb(247 246 246)">
                    <p class="information">
                        {{englishName}}
                    </p>
                    <p class="information">
                        {{information}}
                    </p>

                </div>
            </v-col>
        </v-row>
    </v-col>
</v-row>
</template>

<style lang="scss">
$cBrack:rgba(0, 0, 0, 0.87);
$cDarkRed:rgba(105, 31, 31, 0.87);

.profile-header {
    width: 100%;
    background-color: $cDarkRed;
    color: white;
    position: relative;
}

.profile-header-text {
    margin-left: 5px;
}

.v-application p {
    margin-top: 8px;
    margin-bottom: 8px;
}

.information {
    font-size: 0.8rem;
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

.profile-img {
    max-height: 100px;
    max-width: 100px;
}

@media (min-width: 480px) {
    .information {
        font-size: 1rem;
    }

}
</style>

<script>
export default {
    data() {
        return {
            hover: false,
            englishName: "Kurihara Hironari",
            information:"はじめまして栗原と申します",
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
