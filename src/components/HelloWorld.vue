<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <result/>
    <button-counter/>
  </div>
</template>

<script>
  import Result from "./Result";
  import ButtonCounter from "./ButtonCounter";

  export default {
    name: 'HelloWorld',
    components: {Result, ButtonCounter},
    data() {
      return {
        msg: 'Tu research VueJS'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
