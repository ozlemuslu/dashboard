<template>
  <div id="app">
    <Dashboard :key="componentKey" @refresh-page="rerender"/>
    <vue-snotify/>
  </div>
</template>

<script>
import Dashboard from './views/Dashboard.vue'

export default {
  name: 'App',
  components: {
    Dashboard
},
 data() {
    return {
      componentKey: 0,
    };
  },
  methods: {
    rerender() {
      this.componentKey += 1;
    },
  },
}
</script>

<style lang="scss">
@import "./sass/common";
@import "~vue-snotify/styles/dark.scss";
</style>
