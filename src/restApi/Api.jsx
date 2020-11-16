import axios from 'axios'



export const Api = {
    getStories () {
        return  axios.get('/stories').then(response => response.data)
    }
}