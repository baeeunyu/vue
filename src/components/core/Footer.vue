<template>
    <div>
        <v-footer absolute class="font-weight-medium">
            <v-col class="text-center" cols="12">
                ⓒ2020 —
                <strong>Vuetify Made with by Eunyu Bae</strong>
            </v-col>
        </v-footer>
    </div>
</template>

<script>
// @ is an alias to /src

export default {
    name: "Footer",
    components: {}, //위에 import시킨 파일을 여기에 등록
    //그리고 html영역에 <이름 :msg="쓰고 싶은 메시지?">형식으로 쓰기
    data() {
        return {};
    },
    methods: {}
};
</script>

<style lang="scss" scoped>
</style>
