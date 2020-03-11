<template>
  <div>
    <p>This is result: </p>
    <h1>{{result}}</h1>
  </div>
</template>

<script>
  export default {
    computed: {
      result() {
        return this.$store.state.result;
      }
    }
  }
</script>

<style scoped>

</style>
