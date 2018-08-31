import { GET_ALL_PUBLIC_NOTES, LOADING } from './types'
import { ROOT_URL } from './index'

export const getAllPublicNotes = () => (dispatch) =>{
    dispatch({type: LOADING});
    return fetch(ROOT_URL + `/notes`,
    {headers: {
     "Content-Type": "application/json",
     Accept: "application/json",
     Authorization: `Bearer ${localStorage.getItem("token")}`
     },} )
   .then(r  => r.json())
   .then(json => dispatch({type: GET_ALL_PUBLIC_NOTES, payload: json}))
    
}
