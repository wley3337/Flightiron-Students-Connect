import { LOADING,  GET_ALL_CATEGORIES } from './types'

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
  .then(json => dispatch({type: GET_ALL_CATEGORIES, payload: json}))
}

export function helpGetNewCat(dispatch){
   
    dispatch(getCategories())

}