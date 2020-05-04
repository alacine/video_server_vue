<template>
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" router>
    <el-menu-item index="/">首页</el-menu-item>
    <el-menu-item index="/upload">投稿</el-menu-item>
    <el-menu-item index="/login">登录</el-menu-item>
    <el-menu-item index="/space" @click.native="showSpace()">个人中心</el-menu-item>
    <el-menu-item index="/about">关于本站</el-menu-item>
  </el-menu>
</template>

<script>
export default {
  data () {
    return {
      activeIndex: '1'
    }
  },
  methods: {
    load () {
      console.log('NavBar')
    },
    beforeMount () {
      this.load()
    },
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    },
    showSpace () {
      this.$router.push({
        name: 'Space',
        params: {
          uid: this.$cookies.get('X-User-Id')
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
