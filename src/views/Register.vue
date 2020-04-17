<template>
  <div class="register">
    <div class="main-contianer">
      <div class="register-card">
        <div class="title">注册：</div>
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="账号" :rules="[{ required: true, message: '账号不能为空'},]">
            <el-input v-model="form.user_name"></el-input>
          </el-form-item>
          <el-form-item label="密码" :rules="[{ required: true, message: '密码不能为空'},]">
            <el-input type="password" v-model="form.pwd"></el-input>
          </el-form-item>
          <el-form-item label="确认密码" :rules="[{ required: true, message: '密码不能为空'},]">
            <el-input type="password" v-model="form.pwd_confirm"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">注册</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import * as API from '@/api/user'
export default {
  name: 'Register',
  data () {
    return {
      form: {
        user_name: '',
        pwd: '',
        pwd_confirm: ''
      }
    }
  },
  methods: {
    onSubmit () {
      if (this.form.pwd !== this.form.pwd_confirm) {
        this.$notify({
          title: '注册失败',
          message: '两次密码输入不一致',
          type: 'warning'
        })
        return
      }
      API.register(this.form).then((res) => {
        if (res.status > 0) {
          this.$notify.error({
            title: '注册失败',
            message: res.msg
          })
        } else {
          this.$notify({
            title: '注册成功',
            message: 'success',
            type: 'success'
          })
          this.$router.push({
            name: 'Login'
          })
        }
      }).catch((error) => {
        this.$notify.error({
          title: '注册失败',
          message: error
        })
      })
    }
  },
  comments: {},
  components: {
  }
}
</script>

<style>
.title {
  font-family: Microsoft Yahei;
  font-weight: 500;
  font-size: 30px;
  padding: 20px;
}

.register-card{
  margin: 0 auto;
  padding: 10px;
  background: #fff;
  border: 1px solid #eee;
  border-radius: 4px;

  padding: 15px 20px;
  width: 700px;
}
</style>
