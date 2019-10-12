<template>
  <div>
    <h1>asd</h1>
    <button @click="counter(1)">AddCount</button>
    <button @click="counter(-1)">DecCount</button>
    <h2>Counter {{counterState}}</h2>
  </div>
</template>  

<script>
export default {
  methods: {
    counter(val) {
      this.$store.state.counter += val;
    }
  },
  computed: {
    counterState() {
      return this.$store.state.counter;
    }
  }
};
</script>

<style lang="scss">
</style>