<template>
    <div class="appbar">
        <v-app-bar color="white">
            <v-avatar class="logo">
                <img :src="require('../../assets/logo.svg')" alt="john" />
            </v-avatar>
            <v-toolbar-title>VUETIFY</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn>Login</v-btn>
        </v-app-bar>
    </div>
</template>

<script>
// @ is an alias to /src

export default {
    name: "AppBar",
    components: {}, //위에 import시킨 파일을 여기에 등록
    //그리고 html영역에 <이름 :msg="쓰고 싶은 메시지?">형식으로 쓰기
    data() {
        return {};
    },
    methods: {}
};
</script>

<style lang="scss" scoped>
.logo {
    margin-left: 20px;
}
</style>
