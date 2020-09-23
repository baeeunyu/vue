<template>
  <div class="forif">
    <h1>New For / If page</h1>
    <h1 v-if="awesome">Vue is Visible!</h1>
    <h1 v-if="!awesome">Vue is unvisible!</h1>
    <h2 v-else-if="isElse">This is Else If</h2>
    <h1 v-else>Oh no</h1>
    <h1 v-show="ok">안녕하세요!</h1>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'ForIf',
  components: {},
  data() {
    return { awesome: true, isElse: true };
  },
  computed: {},
  methods: {},
};
</script>
<style lang="scss" scoped></style>
