import {SET_OWNER_FOCUS} from './types'




export const setOwnerFocus = (owner) => (dispatch)=>{
    dispatch({type: SET_OWNER_FOCUS, payload: owner})
}