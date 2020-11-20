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
// const setProduct = (items) => ({ type: 'SET_PRODUCT', payload: items })
// const setLoaded = (payload) => ({ type: 'SET_LOADED', payload})
// //в зависимости от пришедших category и sortBy бекенд будет делать сортировкуф
// export const fetchProduct = (category, sortBy) => (dispatch) => {
//     dispatch(setLoaded(false))
//     axios.get(`/data?${category !== null ? `category=${category}` : ''}&_sort=${sortBy.type}&_order=${sortBy.order}`).then(({data}) => dispatch(setProduct(data)))
// }
