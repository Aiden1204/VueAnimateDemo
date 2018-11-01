<template>
    <div class="A">
        <top title="a"></top>
        <bottom bg="red"></bottom>
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
    .A {
        width: 100%;
        height: 100%;
        background-color: blue;
        position: fixed;
    }

</style>