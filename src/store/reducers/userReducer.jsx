import React from "react";
import produce from "immer";
import {UserApi} from "../../restApi/userApi";

const initialState = {
    data: undefined,
    status: 'nothing'
}
//редьюсер пользователя
const userReducer = (state = initialState, action) => {
    switch (action.type) {
        //на случай успешной логинизации, вернет статус "success" и данные на юзера
        case 'FETCH_USER': {
            return produce(state, draft => {
                draft.data = action.payload.data
                draft.status = action.payload.status
            })
        }
        case 'AUTH_ME_USER': {
            console.log('Data прилетевшая после AuthMe', action.payload)
            return produce(state, draft => {
                draft.data = action.payload.data
                draft.status = action.payload.status
            })
        }
        //в случае неправильной логинизации вернет статус "error"
        case 'ERROR_USER': {
            return produce(state, draft => {
                draft.status = 'error'
            })
        }
        default:
            return state
    }
}
export default userReducer

const setUser = (data) => ({type: 'FETCH_USER', payload: data})
export const authMeUser = (data) => ({type: 'AUTH_ME_USER', payload: data})
const setUserError = (error) => ({type: 'ERROR_USER', payload: error})

export const setUserData = (postData) => async (dispatch) => {
    try {
        const data = await UserApi.signIn(postData)
        //в случае успешной логинизации запишет прилетевшие данные в стор
        dispatch(setUser(data))
        //и в хедерах браузера сохранит токен пользователя
        window.localStorage.setItem('token', data.data.token)
    } catch (error) {
        //иначе ошибка и окно алерта
        dispatch(setUserError())
     }
}