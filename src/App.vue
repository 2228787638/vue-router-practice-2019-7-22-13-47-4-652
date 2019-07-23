<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import Item from "./components/Item";
import Inputs from "./components/Inputs";
export default {
  name: 'app',

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

  display:block;
  color: #2c3e50;
}
</style>
