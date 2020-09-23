<template>
    <div class="if">
        <h1>New If page</h1>
        <h1 v-if="awesome">Vue is Visible!</h1>
        <h1 v-if="!awesome">Vue is Unvisible!</h1>
        <h2 v-else-if="isElse">This is Else If</h2>
        <h1 v-else>Oh no 😢</h1>
        <h1 v-show="ok">안녕하세요!</h1>
    </div>
</template>

<script>
export default {
    name: 'If',
    components: {},
    data() {
        return {
            awesome: true,
            isElse: true,
            ok: true,
        };
    },
    computed: {},
    methods: {},
};
</script>

<style land="scss" scoped></style>
