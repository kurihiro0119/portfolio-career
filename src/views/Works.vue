<template>
<v-row class="work-container">
    <div class="work-header">
        <div class="work-header-text">
            <h1>work</h1>
        </div>
    </div>
</v-row>
</template>

<style lang="scss">
$cBrack:rgba(0, 0, 0, 0.87);
$cDarkRed:rgba(105, 31, 31, 0.87);

.work-header {
    width: 100%;
    background-color: $cDarkRed;
    color: white;
    position: relative;
}

.work-header-text {
    margin-left: 5px;
}

</style>

<script>
export default {
    data() {
        return {
        }
    },
}
</script>
