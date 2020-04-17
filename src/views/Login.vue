<template>
  <div class="login">
    <div class="main-contianer">
      <div class="login-card">
        <div class="title">登录：</div>
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="账号" :rules="[{ required: true, message: '账号不能为空'},]">
            <el-input v-model="form.user_name"></el-input>
          </el-form-item>
          <el-form-item label="密码" :rules="[{ required: true, message: '密码不能为空'},]">
            <el-input type="password" v-model="form.pwd"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">登录</el-button>
            <el-button @click.native="onRegister">注册</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<!-- <script src="http://static.geetest.com/static/tools/gt.js"></script> -->
<script>
import * as API from '@/api/user'
export default {
  name: 'Login',
  data () {
    return {
      form: {
        user_name: '',
        pwd: ''
      }
    }
  },
  methods: {
    onSubmit () {
      console.log(this.form)
      API.login(this.form).then((res) => {
        this.$notify({
          title: '登录成功',
          message: 'success',
          type: 'success'
        })
        this.$cookies.set('X-Session-Id', res.session_id, 30)
        this.$cookies.set('X-User-Name', this.form.user_name, 30)
        console.log(document.cookie)
        // 跳转首页
        this.$router.push({
          name: 'Home'
        })
      }).catch((res) => {
        this.$notify.error({
          title: '登录失败',
          message: `Code: ${res.response.data.error_code}; ${res.response.data.error}`
        })
        console.log(res)
      })
    },
    onRegister () {
      this.$router.push({
        name: 'Register'
      })
    }
  },
  comments: {},
  components: {
  }
}
</script>

<style>
.title{
  font-family: Microsoft Yahei;
  font-weight: 500;
  font-size: 30px;
  padding: 20px;
}

.login-card{
  margin: 0 auto;
  padding: 10px;
  background: #fff;
  border: 1px solid #eee;
  border-radius: 4px;

  padding: 15px 20px;
  width: 700px;
}
</style>
