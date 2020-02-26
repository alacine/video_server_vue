import axios from 'axios'

const getVideos = () => axios.get('/api/videos').then(res => res.data)
const getVideoInfo = id => axios.get(`/api/video/${id}`).then(res => res.data)
const uploadVideo = form => axios.post('/api/video', form).then(res => res.data)
const getVideoComments = id => axios.get(`/stream/video/${id}`).then(res => res.data)

export {
  getVideos,
  getVideoInfo,
  uploadVideo,
  getVideoComments
}
