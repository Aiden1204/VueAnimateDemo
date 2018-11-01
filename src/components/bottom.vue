<template>
    <div class="bottom" :style="'top:'+ num + 'px;background-color: '+ bg + ';'">
        bottom
    </div>
</template>

<script>
    export default {
        name: "bottom",
        data() {
            return {
                num:0,
                test:1,
            };
        },
        props: ["bg"],
        mounted() {
            let screenH = document.documentElement.clientHeight || window.innerHeight;
            window.console.log(screenH);
            this.num = screenH - 50 - 50;
        }
    }
</script>

<style scoped>
    .bottom {
        width: 100%;
        height: 50px;
        line-height: 50px;
        position: absolute;
    }
</style>