import axios from 'axios'

const login = form => axios.post('/api/sessions', form).then(res => res.data)
const register = form => axios.post('/api/users', form).then(res => res.data)

export {
  login,
  register
}
