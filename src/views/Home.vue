<template>
    <div class="home">
        <v-app-bar color="white accent-4" dense dark height="100px">
            <h1 class="logo">
                <img src="../assets/banners/vuetify-logo-dark.png" alt />
            </h1>

            <v-toolbar-title color="black">VUETIFY</v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn icon>
                <v-icon>mdi-heart</v-icon>
            </v-btn>

            <v-btn icon>
                <v-icon>mdi-magnify</v-icon>
            </v-btn>

            <v-menu left bottom>
                <template v-slot:activator="{ on, attrs }">
                    <v-btn icon v-bind="attrs" v-on="on">
                        <v-icon>mdi-dots-vertical</v-icon>
                    </v-btn>
                </template>

                <v-list>
                    <v-list-item v-for="n in 5" :key="n" @click="() => {}">
                        <v-list-item-title>Option {{ n }}</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
        </v-app-bar>
    </div>
</template>

<script>
// @ is an alias to /src

export default {
    name: "Home",
    components: {}, //위에 import시킨 파일을 여기에 등록
    //그리고 html영역에 <이름 :msg="쓰고 싶은 메시지?">형식으로 쓰기
    data() {
        return {};
    },
    methods: {}
};
</script>

<style lang="scss" scoped>
.home {
}
.logo {
    width: 45px;
    height: 45px;
    margin-left: 10px;
}
.logo img {
    width: 100%;
}
</style>
