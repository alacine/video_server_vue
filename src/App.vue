<template>
  <div id="app">
    <NavMenu></NavMenu>
    <router-view></router-view>
  </div>
</template>

<script>
/* import HelloWorld from './components/HelloWorld.vue' */
import NavMenu from './components/NavMenu.vue'

export default {
  name: 'app',
  components: {
    NavMenu
  }
}
</script>

<style>
</style>
