<template>
    <div class="D">
        <top title="d"></top>
        <bottom bg="pink"></bottom>
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
    .D {
        width: 100%;
        height: 100%;
        background-color: darkslategray;
        position: fixed;
    }
</style>