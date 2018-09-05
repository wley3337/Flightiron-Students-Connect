import { SET_SEARCH_CATEGORY_ID, CLEAR_SEARCH_CATEGORY_ID } from './types'


export const setSearchCategoryId = (categoryId) => (dispatch) =>{
    dispatch({type: SET_SEARCH_CATEGORY_ID, payload: categoryId})
}

export const clearSearchCategoryId=()=>{
    return {type: CLEAR_SEARCH_CATEGORY_ID}
}