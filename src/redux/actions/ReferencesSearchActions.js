import { SET_REFERENCE_SEARCH_CATEGORY_ID, CLEAR_REFERENCE_SEARCH_CATEGORY_ID } from './types'



export const setReferenceCategoryId= (catId) =>{
    return {type: SET_REFERENCE_SEARCH_CATEGORY_ID, payload: catId}
}

export const clearReferenceCategoryId = () =>{
    return {type: CLEAR_REFERENCE_SEARCH_CATEGORY_ID}
}

