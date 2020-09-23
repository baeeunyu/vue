<template>
    <div class="event">
        <h1>Event : {{ pageH1 }}</h1>
        <button v-on:click="counter += 1">Add</button>
        <p>위 버튼을 클릭한 횟수는 {{ counter }} 번 입니다.</p>
        <br />
        <div id="example-2">
            <!-- `greet`는 메소드 이름으로 아래에 정의되어 있습니다 -->
            <button @click="greet()">Greet</button>
        </div>
        <br />
        <div id="example-3">
            <button v-on:click="say('hi')">Say hello</button>&nbsp;
            <button v-on:click.ctrl="say('what')">Say what</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Event',
    props: ['pageH1'], //문자열로 넣어주기
    components: {},
    data() {
        return { counter: 0, name: 'Vue.js' };
    },
    computed: {},
    methods: {
        greet: function(event) {
            // 메소드 안에서 사용하는 `this` 는 Vue 인스턴스를 가리킵니다
            alert('Hello ' + this.name + '!');
            // `event` 는 네이티브 DOM 이벤트입니다
            if (event) {
                alert(event.target.tagName);
            }
        },
        say: function(message) {
            alert(message);
            event.preventDefault(); //새로고침 막기
            event.stopPropagation(); //이벤트 상위 엘리먼트 전달 중지
        },
    },
};
</script>

<style land="scss" scoped></style>
