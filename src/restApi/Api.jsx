import axios from 'axios'



export const Api = {
    getStories () {
        return  axios.get('/stories').then(response => response.data)
    },
    getStory(_id){
        return axios.get(`/stories?_id=${_id}`)
    },
    addStory(data){
        return axios.post('/stories', data)
    }
}
