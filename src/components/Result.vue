<template>
  <div>
    <p>This is result: </p>
    <h4>{{getTenResult}}</h4>
    <h4>{{getResult}}</h4>
    <h4>This is name result: {{getNameResult}}</h4>
    <hr>
    <input type="text" v-model="value"/>
    <h4>This is value: {{getValue}}</h4>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'

  export default {
    computed: {
      ...mapGetters(["getResult", "getTenResult", "getNameResult", "getValue"
      ]),
      value: {
        get() {
          return this.$store.getters.getValue
        },
        set(value) {
          return this.$store.dispatch('updateValueAction', value)
        }
      }
    },
  }
</script>

<style scoped>

</style>
