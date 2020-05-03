<template>
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" router>
    <el-menu-item index="/">首页</el-menu-item>
    <el-menu-item index="/upload">投稿</el-menu-item>
    <el-menu-item index="/login" :style="{'display':showLogin}">登录</el-menu-item>
    <el-menu-item index="/space" :style="{'display':showSpace}">个人中心</el-menu-item>
    <el-menu-item index="/about">关于本站</el-menu-item>
  </el-menu>
</template>

<script>
export default {
  data () {
    return {
      activeIndex: '1',
      showLogin: 'list-item',
      showSpace: 'none'
    }
  },
  methods: {
    load () {
      console.log('NavBar')
      console.log(this.$cookies.get('X-Session-Id'))
      if (this.$cookies.isKey('X-Session-Id') && this.$cookies.isKey('X-User-Id')) {
        this.showSpace = 'list-item'
        this.showLogin = 'none'
      } else {
        this.showSpace = 'none'
        this.showLogin = 'list-item'
      }
    },
    beforeMount () {
      this.load()
    },
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
