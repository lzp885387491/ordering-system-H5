<template>
  <div class="login">
    <div class="item"></div>
    <div class="item"></div>
    <div class="item"></div>
    <div class="item"></div>
    <div class="item"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
.login {
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  background-color: #7365f8;
}
.item:nth-of-type(odd) {
  background-color: #8372ff;
}
</style>