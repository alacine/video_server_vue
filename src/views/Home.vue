<template>
  <div class="home">
    <el-row :gutter="20">
      <el-col :span="4" v-for="video in videos" :key="video.id">
        <el-card class="video-cards" @click.native="playVideo(video)">
          <img src="../assets/video.svg">
          <div class="video-info">
            <div>
              <span class="video-title">{{video.title.substring(0,10)}}</span>
            </div>
            <div class="bottom clearfix">
              <span class="video-author_name">{{video.author_name.substring(0,10)}}</span>
            </div>
            <div class="bottom clearfix">
              <span class="video-description">{{video.description}}</span>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import * as API from '@/api/video'
export default {
  name: 'Home',
  data () {
    return {
      videos: []
    }
  },
  methods: {
    load () {
      API.getVideos().then((res) => {
        this.videos = res
      }).catch((res) => {
        this.$notify({
          title: '获取视频资源异常',
          message: '请检查网络连接',
          type: 'warning'
        })
      })
    },
    playVideo (video) {
      this.$router.push({
        name: 'playVideo',
        params: {
          vid: video.id
        }
      })
    }
  },
  components: {
  },
  beforeMount () {
    this.load()
  }
}
</script>

<style type="text/css">
.video-surface {
  margin-right: 30px;
}

.video-title{
  font-size: 15px;
}

.video-author_name {
  font-size: 13px;
  color: #909399;
}

.video-description {
  font-size: 13px;
  color: #606266;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  display: block;
  float: left;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both
}

.video-cards {
  margin-top: 10px;
  cursor: pointer;
}
</style>
