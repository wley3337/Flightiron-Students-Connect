import { LOADING, SET_CURRENT_USER,  GET_ALL_CATEGORIES } from './types'

import { ROOT_URL } from './index'

//fetch catagories
export const getCategories = () => dispatch => {
    console.log('getting Categories')
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

export function helpGetNewCat(json, dispatch){
    dispatch({type: SET_CURRENT_USER, payload: json})
    dispatch(getCategories())

}