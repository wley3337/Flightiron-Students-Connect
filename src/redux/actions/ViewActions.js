import { UPDATE_CATEGORIES, UPDATE_NOTE_CONTENT, UPDATE_PUBLIC, SET_FOCUS_NOTE, UPDATE_NEW_CATEGORY } from './types'
// import { ROOT_URL } from './index'




export const setFocusNote = (payload) => (dispatch)=> {
    dispatch({type: SET_FOCUS_NOTE, payload: payload})
}

export const updateCategories = (payload) => (dispatch) => {
    dispatch({type: UPDATE_CATEGORIES, payload: payload})
}

export const updateNoteContent = (payload) => (dispatch) => {
    dispatch({type: UPDATE_NOTE_CONTENT, payload: payload})
}

export const updatePublic = (payload) => (dispatch) => {
    dispatch({type: UPDATE_PUBLIC, payload: payload})
}

export const updateNewCategory = (payload) => (dispatch) => {
    dispatch({type: UPDATE_NEW_CATEGORY, payload: payload})
}