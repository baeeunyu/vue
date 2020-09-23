<template>
    <div class="for">
        <h1>New For(List) page</h1>
        <ul id="example-1">
            <li v-for="(item, i) in items" :key="i">{{ item.message }}</li>
        </ul>
        <ul id="v-for-object" class="demo">
            <li v-for="(value, name) in object" :key="name">
                {{ value }} : {{ name }}
            </li>
        </ul>
        <li v-for="(n, i) in evenNumbers" :key="i">{{ n }}</li>
        <span v-for="n in 20" :key="n">{{ n + '&nbsp;' }}</span>
    </div>
</template>

<script>
export default {
    name: 'For',
    components: {},
    data() {
        return {
            items: [{ message: 'Foo' }, { message: 'Bar' }],
            object: {
                title: 'How to do lists in Vue',
                author: 'Jane Doe',
                publishedAt: '2016-04-10',
            },
            numbers: [1, 2, 3, 4, 5],
        };
    },
    computed: {
        evenNumbers: function() {
            return this.numbers.filter(function(number) {
                return number % 2 === 0;
            }); /*filter()는 걸러주는 역할*/
        },
    },
    methods: {},
};
</script>

<style land="scss" scoped></style>
