<template>
  <div>
    <button type="button" v-on:click="decrement">Decrement (-)</button>
    <button type="button" v-on:click="increment">Increment (+)</button>
  </div>
</template>

<script>
  export default {
    methods: {
      increment: function () {
        return this.$store.state.result++;
      },
      decrement: function () {
        return this.$store.state.result--;
      }
    }
  }
</script>

<style scoped>

</style>
