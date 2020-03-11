<template>
  <div id="app">
    <img
      src="https://upg91g.db.files.1drv.com/y4mNSIV2knoG-96lj4_DYdWVkyUF_m0KSTSR0v4Si83Zjc9xx2eMPlhSCNzJXjh-B1yc1e5gLKneatD2wax8VrWd10Aj2UyPmkqc0mdtof_B7sNmAZlOEa9s8cfxCdCRkwjBM3MCu8wjUIfELvCHKSJstH2WMaLuqvxPF6tAvwvOVIcWHwZxvSKGcjX21GtiWRyl7XBjcDvqYW6KPBdqnSq1Q?width=255&height=256&cropmode=none"
      width="124" height="124"/>
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App',
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
