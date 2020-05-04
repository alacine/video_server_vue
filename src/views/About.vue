<template>
  <div class="about">
    <div class="title">欢迎来到本站点</div>
    <div class="master-info">本网站由 <a href="https://github.com/alacine">alacine</a> 创建运营</div>
    <div class="master-info">有很多的布局和样式参考了<a href="http://www.xiaosiro.cn/"> siaosiro.cn </a> 这个站点</div>
    <div class="master-info">项目地址 <a href="https://github.com/alacine/video_server">后端(Go)</a> <a href="https://github.com/alacine/video_server_vue">前端(Vue)</a></div>
    <div class="master-info">如果您有什么建议或者侵犯到您的权益，请邮件至 ryanruirr@gmail.com</div>
    <div class="master-info"></div>
    <div class="block">
      <el-timeline>
        <el-timeline-item timestamp="2020/5/4" placement="top">
          <el-card>
            <h4>v1.1</h4>
            <p>登陆页面，个人中心页面，投稿页面</p>
          </el-card>
        </el-timeline-item>
      </el-timeline>
      <el-timeline>
        <el-timeline-item timestamp="2020/2/29" placement="top">
          <el-card>
            <h4>v1.0</h4>
            <p>首页视频列表, 视频详情页</p>
          </el-card>
        </el-timeline-item>
      </el-timeline>
    </div>
    <el-backtop :visibility-height="600"></el-backtop>
  </div>
</template>
<script>
export default {
  name: 'About',
  components: {},
  data () {
    return {
    }
  },
  methods: {

  },
  beforeMount () {
    // this.load();
  }
}
</script>

<style>
.title{
  font-weight: 500;
  font-size: 30px;
  padding: 20px;
}

.master-info{
  margin-left: 55px;
  width: 1000px;
  font-weight: 500;
  font-size: 15px;
  padding-top: 20px;
}

.about {
  min-height: 55vw;
  min-width: 1300px;
}
</style>
