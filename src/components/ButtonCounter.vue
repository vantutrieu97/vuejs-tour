<template>
  <div>
    <div>
      <button type="button" v-on:click="decrement">Decrement (-)</button>
      <button type="button" v-on:click="increment">Increment (+)</button>
    </div>
    <button type="button" v-on:click="decrementAction">Decrement action</button>
  </div>
</template>

<script>
  import {mapActions} from "vuex";

  export default {
    methods: {
      increment: function () {
        return this.$store.commit('incrementOption', 246);
      },
      decrement: function () {
        return this.$store.commit('decrementOption', 444);
      },
      ...mapActions(["decrementAction"])
    },

  }
</script>

<style scoped>

</style>
