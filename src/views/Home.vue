<template>
  <div class="home">
    <div class="">
      <el-row :gutter="20">
        <el-col :span="4" v-for="video in videos" :key="video.id">
          <el-card class="video-cards">
            <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png">
            <div style="padding: 14px;">
              <span>{{video.title}}</span>
              <div class="bottom clearfix">
                <span class="description">{{video.name}}</span>
                <span class="description">{{video.description}}</span>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
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
    }
  },
  components: {
  },
  beforeMount () {
    this.load()
    var currentDate = new Date()
    console.log(currentDate)
  }
}
</script>

<style type="text/css">
.description {
  font-size: 13px;
  color: #999;
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
