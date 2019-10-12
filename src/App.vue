<template>
  <div id="app">
    <router-link to="/"></router-link>
    <span></span>
    <counter></counter>
    <router-view />
  </div>
</template>

<script>
import counter from "./views/counter";
export default {
  components: {
    counter
  }
};
</script >

<style lang="scss" scoped>
span {
  background-color: green;
}
</style>
