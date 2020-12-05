// import {axios} from './axios'
import axios from 'axios'

//запросы для работы с историями
export const StoriesApi = {
    //получить все истории
    getStories () {
        return  axios.get('/stories').then(response => response.data)
    },
    //получить конктетную историю
    getStory(_id){
        return axios.get(`/stories/${_id}`)
    },
    //добавить историю
    addStory(data){
        return axios.post('/stories', {text: data}).then(response => response.data)
    }
}
