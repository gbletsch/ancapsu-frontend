import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:8080'
  // baseURL: "http://dummy.restapiexample.com/api/v1"
})

export default api

// https://ancap.su/api/News/HomePage