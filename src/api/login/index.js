import axios from 'axios'

const login = form => axios.post('/api/login', form).then(res => res.data)
const register = form => axios.post('/api/register', form).then(res => res.data)

export {
  login,
  register
}
