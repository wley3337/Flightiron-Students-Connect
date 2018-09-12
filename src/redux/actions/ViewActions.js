import { UPDATE_CATEGORIES, UPDATE_NOTE_CONTENT, UPDATE_PUBLIC, SET_FOCUS_NOTE, UPDATE_NEW_CATEGORY } from './types'
import { updateUser } from './UserActions'



export const setFocusNote = (payload) => (dispatch, getState) =>{
    if(getState().view.content !== ""){dispatch(updateUser(getState().view, getState().currentUser.id))}
    dispatch ({type: SET_FOCUS_NOTE, payload: payload})
}
   


export const updateCategories = (payload) => 
    ({type: UPDATE_CATEGORIES, payload: payload})


export const updateNoteContent = (payload) => 
    ({type: UPDATE_NOTE_CONTENT, payload: payload})


export const updatePublic = (payload) => 
    ({type: UPDATE_PUBLIC, payload: payload})


export const updateNewCategory = (payload) => 
    ({type: UPDATE_NEW_CATEGORY, payload: payload})
