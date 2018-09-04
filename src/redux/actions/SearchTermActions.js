import {SET_SEARCH_TERM} from './types'


export const setSearchTerm = (term) => (dispatch)=>{
    dispatch({type: SET_SEARCH_TERM, payload: term})
}

