<template>
  <div>
    <div>
      <button type="button" v-on:click="decrement(1)">Decrement (-)</button>
      <button type="button" v-on:click="increment(1)">Increment (+)</button>
    </div>
    <button type="button" v-on:click='incrementActionFake(1)'>Increment action</button>
    <button type="button" v-on:click="decrementAction">Decrement action</button>
  </div>
</template>

<script>
  import {mapActions} from "vuex";

  export default {
    methods: {
      ...mapActions(["decrementAction", 'incrementAction']),
      increment(value) {
        return this.$store.commit('incrementOption', value);
      },
      decrement(value) {
        return this.$store.commit('decrementOption', value);
      },
      incrementActionFake(value) {
        console.log('Click on incrementActionFake... ' + value);
        this.incrementAction(value);
      },
    },

  }
</script>

<style scoped>

</style>
