<template>
  <div class="video-container">
    <div class="video-page">
      <div class="video-title">
        <h2>{{video.title}}</h2>
      </div>
      <span class="video-ctime">投稿日期: {{video.create_time}}</span>
      <el-button v-if="this.video.author_id == this.$cookies.get('X-User-Id')" id="delete" @click="deleteVideo" type="danger">删除视频</el-button>
      <video-player
        class="video-player-box"
        :options="playerOptions">
      </video-player>
      <div class="video-author">
        <h3>作者: {{video.author_name}}</h3>
      </div>
      <div class="video-description">
        <h3>视频简介</h3>
        <p>{{video.description}}</p>
      </div>
    </div>
    <div class="video-comments">
      <div class="video-comments-input">
        <el-input
          class="inputCommentArea"
          type="textarea"
          :autosize="{ minRows:3 }"
          maxlength=1000
          show-word-limit
          placeholder="请输入内容"
          v-model="inputComment">
        </el-input>
        <el-button
          class="submitButton"
          type="primary"
          @click="onSubmit"
          :disabled="locked">
          发布评论
        </el-button>
      </div>
      <div class="video-comments-list" v-for="comment in comments" :key="comment.id">
        <div class="comment-card">
          <div class="c-uavatar">
            <el-avatar :size="50" icon="el-icon-user-solid"></el-avatar>
          </div>
          <div class="c-name">{{comment.author_name}}</div>
          <div class="c-content">{{comment.content}}</div>
          <div class="c-ptime">{{comment.post_time}}</div>
        </div>
      </div>
      <div class="video-comments-nomore">
        <span>后面没有了~</span>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import * as API from '@/api/video'
import 'video.js/dist/video-js.css'
import { videoPlayer } from 'vue-video-player'
export default {
  name: 'VideoPage',
  data () {
    return {
      video: {},
      playerOptions: {
        fluid: true,
        autoplay: false,
        sources: [{
          type: 'video/mp4',
          src: ''
        }]
      },
      inputComment: '',
      postContent: {
        /* https://stackoverflow.com/questions/45556209/getting-cookie-value-as-integer */
        author_id: parseInt(this.$cookies.get('X-User-Id')),
        content: ''
      },
      comments: [],
      locked: false
    }
  },
  methods: {
    load () {
      API.getVideoInfo(this.$route.params.vid).then((res) => {
        this.video = res
        this.playerOptions.sources[0].src = '/stream/videos/' + this.video.id
      }).catch((res) => {
        this.$notify({
          title: '获取视频资源异常',
          message: `Code: ${res.response.data.error_code}; ${res.response.data.error}`,
          type: 'warning'
        })
      })
      API.getVideoComments(this.$route.params.vid).then((res) => {
        this.comments = res.comments
      }).catch((res) => {
        this.$notify({
          title: '获取视频评论异常',
          message: `Code: ${res.response.data.error_code}; ${res.response.data.error}`,
          type: 'warning'
        })
      })
    },
    onSubmit () {
      this.locked = true
      console.log('submit!')
      this.postContent.content = this.inputComment
      API.postVideoComment(this.video.id, this.postContent).then((res) => {
        this.$notify({
          title: '发布评论成功',
          message: '',
          type: 'success'
        })
        this.load()
      }).catch((res) => {
        this.$notify.error({
          title: '发布评论失败',
          message: `Code: ${res.response.data.error_code}; ${res.response.data.error}`
        })
      }).finally((res) => {
        this.locked = false
      })
    },
    deleteVideo () {
      console.log('delete video', this.video.id)
      API.deleteVideo(this.video.id).then((res) => {
        this.$notify({
          title: '视频删除成功',
          message: ''
        })
      }).catch((res) => {
        this.$notify({
          title: '删除失败',
          message: `Code: ${res.response.data.error_code}; ${res.response.data.error}`,
          type: 'warning'
        })
      })
    }
  },
  components: {
    videoPlayer
  },
  beforeMount () {
    this.load()
  }
}
</script>

<style type="text/css">
#delete {
  float: right;
  margin-top: -20px;
}

.video-title{
  font-size: 20px;
  color: #303133;
}

.video-ctime{
  color: #909399;
}

.video-author_name {
  font-size: 13px;
  color: #303133;
}

.video-description {
  font-size: 13px;
  color: #606266;
}

.submitButton {
  margin: 10px 0px 10px 0px
}

.video-comments-input {
  margin: 10px 0px 10px 0px
}

.inputCommentArea {
  margin: 10px 0px 10px 0px
}

.video-comments-list {
  margin: 20px 0px 10px 0px;
  width: 930px;
}

.comment-card {
  padding-top: 3px;
  position: relative;
}

.c-uavatar {
  margin-top: 18px;
  float: left;
  width: 50px;
  height: 50px;
  border: 2px solid hsla(0, 0%, 100%, .4);
  border-radius: 52px;
}

.c-name {
  height: 30px;
  padding-top: 18px;
  margin-left: 84px;
  font-size: 15px;
  font-weight: 500;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #6d757a;
}

.c-content {
  margin-left: 84px;
  width: 846px;
  line-height: 20px;
  padding: 2px 0;
  font-size: 14px;
  text-shadow: none;
  overflow: hidden;
  word-wrap: break-word;
  word-break: break-word;
  white-space: pre-wrap;
}

.c-ptime {
  font-size: 13px;
  color: #B39999;
  line-height: 15px;
  height: 15px;
  padding-bottom: 10px;
  border-bottom: 1px solid #e5e9ef;
  margin-left: 84px;
  margin-top: 5px;
}
</style>
