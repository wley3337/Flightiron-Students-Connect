import {SET_FLASH_MESSAGE, DELETE_FLASH_MESSAGE} from './types'

export const setFlashMessage = (message) => ({type: SET_FLASH_MESSAGE, payload: message})

export const deleteFlashMessage = ()=> ({type: DELETE_FLASH_MESSAGE})
