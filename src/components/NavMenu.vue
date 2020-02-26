<template>
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" router>
    <el-menu-item index="/">首页</el-menu-item>
    <el-menu-item index="/upload">投稿</el-menu-item>
    <el-menu-item index="/about">关于我们</el-menu-item>
    <el-menu-item index="/login">登录</el-menu-item>
  </el-menu>
</template>

<script>
export default {
  data () {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
