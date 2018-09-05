import { SET_SEARCH_CATEGORY_ID } from './types'


export const setSearchCategoryId = (categoryId) => (dispatch) =>{
    dispatch({type: SET_SEARCH_CATEGORY_ID, payload: categoryId})
}