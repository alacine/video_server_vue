import axios from 'axios'

const login = form => axios.post('/api/sessions', form).then(res => res.data)
const logout = () => axios.delete('/api/sessions').then(res => res.data)
const register = form => axios.post('/api/users', form).then(res => res.data)
const getUserInfo = id => axios.get(`/api/users/${id}`).then(res => res.data)

export {
  login,
  logout,
  register,
  getUserInfo
}
