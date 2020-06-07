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
        <el-button type="primary" @click="onSubmit" :disabled="!this.locked">创建视频信息</el-button>
      </el-form-item>

      <el-form-item label="视频">
        <el-upload class="upload-demo" :action="this.uploadUrl"
          :before-upload="vBeforeUpload" multiple
          :limit="1" :on-exceed="handleExceed" :disabled="this.locked">
          <el-button size="small" type="primary" :disabled="this.locked">点击上传</el-button>
          <div slot="tip" class="el-upload__tip">只能上传mp4文件，且请您自行压缩，最大为 250 MB</div>
        </el-upload>
      </el-form-item>
    </el-form>
  </div>
</template>

<script scoped>
import * as API from '@/api/video'
export default {
  data () {
    return {
      locked: true,
      form: {
        title: '',
        description: '',
        // TODO
        author_id: parseInt(this.$cookies.get('X-User-Id'))
      },
      uploadUrl: '/stream/videos/'
    }
  },
  methods: {
    onSubmit () {
      API.postVideoInfo(this.form).then((res) => {
        this.$notify({
          title: '创建视频信息成功',
          message: `您的视频 ID 将会是 ${res.id}，可以上传视频了`,
          type: 'success'
        })
        this.uploadUrl += res.id
        this.locked = false
      }).catch((res) => {
        // https://github.com/axios/axios/issues/960#issuecomment-309287911
        this.$notify.error({
          title: `Code: ${res.response.data.error_code}`,
          message: `${res.response.data.error}`
        })
        this.locked = true
      })
    },
    vBeforeUpload (file) {
      if (this.newVideoId === 0) {
        this.$notify({
          title: '无法上传',
          message: '请先创建视频信息',
          type: 'warning'
        })
        return false
      }
      const isMP4 = file.type === 'video/mp4'
      if (!isMP4) {
        this.$notify({
          title: '视频格式有误',
          message: '上传视频只能是 mp4 格式!',
          type: 'warning'
        })
      }
      return isMP4
    },
    handleExceed (files) {
      this.$message.warning('仅可上传一个视频')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
