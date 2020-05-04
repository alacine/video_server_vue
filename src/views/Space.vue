<template>
  <div class="space">
    <div class="h">
      <div class="h-info">
        <div class="h-avatar">
          <el-avatar :size="65" :src="circleUrl"></el-avatar>
        </div>
        <div class="h-basic">
          <div id="h-name">{{uname}}</div>
          <div id="h-uid">UID:{{uid}}</div>
        </div>
        <el-button id="exit" @click="logout" type="danger">退出登陆</el-button>
      </div>
    </div>
    <el-row :gutter="20">
      <el-col :span="4" v-for="video in videos" :key="video.id">
        <el-card class="video-cards" @click.native="playVideo(video)">
          <div>
            <!-- <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"> -->
          </div>
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
import * as vAPI from '@/api/video'
import * as uAPI from '@/api/user'
export default {
  name: 'Space',
  data () {
    return {
      videos: [],
      uid: 0,
      uname: ''
    }
  },
  methods: {
    load () {
      this.uid = this.$route.params.uid
      vAPI.getUserVideos(this.$route.params.uid).then((res) => {
        this.videos = res
      }).catch((res) => {
        this.$notify({
          title: '获取视频资源异常',
          message: '请检查网络连接',
          type: 'warning'
        })
      })
      uAPI.getUserInfo(this.$route.params.uid).then((res) => {
        this.uname = res.user_name
      }).catch((res) => {
        this.$notify({
          title: '获取用户信息异常',
          message: '用户不存在',
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

.h {
  position: relative;
  width: 100%;
  padding-top: 150px;
  height: 100px;
  background-image: url(../../public/your_name.jpg);
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
}

.h-info {
  height: 69px;
  margin-left: 20px;
  padding-bottom: 31px;
}

.h-avatar {
  float: left;
  width: 65px;
  height: 65px;
  border: 2px solid hsla(0, 0%, 100%, .4);
  border-radius: 52px;
}

.h-basic {
  float: left;
  color: #FFFFFF;
  font-size: 0;
  margin: 10px 0 0 20px;
}

#h-name {
  display: inline-block;
  margin-right: 5px;
  font-weight: 700;
  line-height: 18px;
  font-size: 18px;
  vertical-align: middle;
}

#h-uid {
  margin-top: 8px;
  color: #CFDEE4;
  font-size: 14px;
  line-height: 26px;
  height: 20px;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

#h-sign {
  margin-top: 4px;
  color: #CFDEE4;
  font-size: 14px;
  line-height: 20px;
  height: 26px;
  width: 740px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
#exit {
  float: right;
  margin-right: 20px;
}
</style>
