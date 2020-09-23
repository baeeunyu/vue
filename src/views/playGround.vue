<template>
    <div class="playground">
        <span>메시지 : {{ msg + 'ㅅㄱㅇ' }}</span>
        <div v-html="msg"></div>
        <div :title="title">타이틀</div>
        <!--v-bind를 아예 생략 할 수 있음-->
        <div>{{ ok ? 'YES' : 'NO' }}</div>
        <p v-if="seen">이제 나를 볼 수 있어요</p>
        <div>
            {{
                title
                    .split('')
                    .reverse()
                    .join('')
            }}
        </div>
        <div>{{ reverseTitle }}</div>
        <div>{{ reverse() }}</div>
        <div :class="{ active: isActive }" class="text-danger">
            클래스 바인딩
        </div>
        <div :class="['active', 'text-danger']">클래스 바인딩</div>
        <div
            :class="[isActive ? 'active' : '', 'text-dangers']"
            class="text-danger"
        >
            클래스 바인딩
        </div>
        <div
            :class="[{ active: isActive }, 'text-dangers']"
            class="text-danger"
        >
            클래스 바인딩
        </div>
        <div v-bind:class="{ active: !isActive }">클래스 바인딩 반전</div>
        <div :style="{ color: 'red', fontSize: size + 'px' }">
            인라인 스타일 바인딩
        </div>
        <div :style="{ color: 'blue', 'font-size': size + 'px' }">
            인라인 스타일 바인딩
        </div>
    </div>
</template>

<script>
// @ is an alias to /src

export default {
    name: 'playground',
    components: {},
    data() {
        return {
            msg: '<p style="color:red;">안녕하세요.</p>',
            title: '안녕하세요 vue.js입니다.',
            ok: true,
            seen: true,
            firstName: 'Foo',
            lastName: 'Bar',
            fullName: 'Foo Bar',
            isActive: true,
            size: 30,
        };
    },
    beforeCreate() {},
    beforeMount() {},
    mounted() {},
    computed: /*캐싱, 고정된 값은 컴퓨티드*/ {
        reverseTitle() {
            let result = this.title
                .split('')
                .reverse()
                .join('');
            result = result + '이건 computed';
            return result;
        },
    },
    methods: /*노캐싱, 주기적 또는 데이터가 바뀌어야 하는 값은 메소드*/ {
        reverse() {
            this.title
                .split('')
                .reverse()
                .join('');
            let result = this.title + '이건 methods';
            return result;
        },
    },
    watch: {
        firstName: function(val) {
            this.fullName = val + ' ' + this.lastName;
        },
        lastName: function(val) {
            this.fullName = this.firstName + ' ' + val;
        },
    },
};
</script>

<style lang="scss" scoped>
.active {
    font-size: 30px;
    color: red;
}
.text-danger {
    border: 1px solid purple;
}
</style>
