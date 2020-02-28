<template>
  <div class="upload">
  <h2>欢迎投稿</h2>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="视频标题">
        <el-input v-model="form.title"></el-input>
      </el-form-item>
      <el-form-item label="视频简介">
        <el-input type="textarea" v-model="form.description"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit" :disabled="locked">确定投稿</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script scoped>
import * as API from '@/api/video'
export default {
  data () {
    return {
      locked: false,
      form: {
        title: '',
        description: '',
        // TODO
        author_id: 1
      }
    }
  },
  methods: {
    onSubmit () {
      this.locked = true
      console.log('submit!')
      API.uploadVideo(this.form).then((res) => {
        this.$notify({
          title: '投稿成功',
          message: `您投稿的 ID 为 ${res.id}`,
          type: 'success'
        })
      }).catch((res) => {
        // https://github.com/axios/axios/issues/960#issuecomment-309287911
        this.$notify.error({
          title: '投稿失败',
          message: `Code: ${res.response.data.error_code}; ${res.response.data.error}`
        })
      }).finally((res) => {
        this.locked = false
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
