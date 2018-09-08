import { LOADING,  GET_ALL_CATEGORIES, ADD_CATEGORY} from './types'

import { ROOT_URL } from './index'

//fetch categories
export const getCategories = () => dispatch => {
    dispatch({type: LOADING});
   return fetch(ROOT_URL + `/categories`,
   {headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}`
    },} )
  .then(r  => r.json())
  .then(json => formatCategoriesForDropDown(json, dispatch) )
}

export function helpGetNewCat(dispatch){ 
    dispatch(getCategories())
}

function formatCategoriesForDropDown(json, dispatch){
    const formatedCategoriesArray = json.map(category => ({ key: category.id, text: category.name, value: category.id }))
    dispatch({type: GET_ALL_CATEGORIES, payload: formatedCategoriesArray})
}

export const addCategoryLocal = (category) => ({type: ADD_CATEGORY, payload: category})

// export const addReferenceCategoryLocal = (category)=> ({type: ADD_RREFERENCE_CATEGORY, payload: category})