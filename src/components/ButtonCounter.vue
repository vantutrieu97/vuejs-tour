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
        return this.$store.commit('incrementOption', 246);
      },
      decrement: function () {
        return this.$store.commit('decrementOption', 444);
      }
    },
  }
</script>

<style scoped>

</style>
