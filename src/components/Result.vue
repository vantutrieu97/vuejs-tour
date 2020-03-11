<template>
  <div>
    <p>This is result: </p>
    <h1>{{getTenResult}}</h1>
    <h1>{{result}}</h1>
    <h1>This is name result: {{getNameResult}}</h1>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'

  export default {
    computed: {
      ...mapGetters(["getTenResult", "getNameResult",
      ]),
      result() {
        return this.$store.state.result;
      }
    }
  }
</script>

<style scoped>

</style>
