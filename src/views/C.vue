<template>
    <div class="C">
        <top title="c"></top>
        <bottom bg="grey"></bottom>
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
    .C {
        width: 100%;
        height: 100%;
        background-color: pink;
        position: fixed;
    }

</style>