import axios from 'axios'

    const apiClient = axios.create({
      baseURL: `http://my-json-server.typicode.com/thonixon321/nuxt-db`,
      withCredentials: false,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })

    export default {
      getEvents() {
        return apiClient.get('/events')
      },
      getEvent(id) {
        return apiClient.get('/events/' + id)
      }
    }