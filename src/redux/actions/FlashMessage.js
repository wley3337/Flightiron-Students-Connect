import {SET_FLASH_MESSAGE, DELETE_FLASH_MESSAGE} from './types'

export const setFlashMessage = (message) => (dispatch) =>{
    dispatch({type: SET_FLASH_MESSAGE, payload: message})
}

export const deleteFlashMessage = ()=> (dispatch) =>{
    dispatch({type: DELETE_FLASH_MESSAGE})
}