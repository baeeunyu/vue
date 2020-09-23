<template>
    <div class="Main">
        <main-banner></main-banner>
    </div>
</template>

<script>
// @ is an alias to /src
export default {
    name: "Main",
    components: {
        MainBanner: () => import("@/components/main/MainBanner.vue")
    }, //위에 import시킨 파일을 여기에 등록
    //그리고 html영역에 <이름 :msg="쓰고 싶은 메시지?">형식으로 쓰기

    data() {
        return {};
    },
    methods: {}
};
</script>

<style lang="scss" scoped>
.Main {
}
</style>