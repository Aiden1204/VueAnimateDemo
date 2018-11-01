<template>
    <div class="B">
        <top title="b"></top>
        <bottom bg="green"></bottom>
    </div>
</template>

<script>
    import top from "../components/top.vue";
    import bottom from "../components/bottom.vue";
    export default {
        data() {
            return {};
        },
        components: {
            top,
            bottom
        }
    };
</script>

<style scoped>
    .B {
        width: 100%;
        height: 100%;
        background-color: plum;
        position: fixed;
    }

</style>