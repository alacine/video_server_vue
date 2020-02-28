<template>
  <div id="app">
    <NavMenu></NavMenu>
    <div class="main-body">
      <router-view></router-view>
    </div>
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
.main-body {
  width: 1300px;
  min-height: 600px;
  margin: 0 auto;
}
</style>
