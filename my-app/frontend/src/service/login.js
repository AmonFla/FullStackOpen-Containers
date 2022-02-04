import axios from 'axios'
const baseUrl = `${process.env.REACT_APP_BACKEND_URL}/api/login`

const login = async (username, password) => {
  const result = await axios.post(baseUrl, { username, password })
  return result.data
}

export default { login }
