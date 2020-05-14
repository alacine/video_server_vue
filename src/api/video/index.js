import axios from 'axios'

const getVideos = () => axios.get('/api/videos').then(res => res.data)
const getVideoInfo = id => axios.get(`/api/videos/${id}`).then(res => res.data)
const postVideoInfo = form => axios.post('/api/videos', form).then(res => res.data)
const getVideoComments = id => axios.get(`/api/videos/${id}/comments`).then(res => res.data)
const postVideoComment = (id, content) => axios.post(`/api/videos/${id}/comments`, content).then(res => res.data)

const getUserVideos = id => axios.get(`/api/users/${id}/videos`).then(res => res.data)
const deleteVideo = vid => axios.delete(`/api/videos/${vid}`).then(res => res.data)

export {
  getVideos,
  getVideoInfo,
  postVideoInfo,
  getVideoComments,
  postVideoComment,
  getUserVideos,
  deleteVideo
}
