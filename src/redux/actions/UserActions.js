import { LOADING, SET_CURRENT_USER, CREATE_USER,  LOGOUT} from './types'
import {helpGetNewCat} from './CategoryActions'

import { ROOT_URL } from './index'


//fetch user token from login from backend
export const userLogin = (username, password) => dispatch => {
    dispatch({type: LOADING});
   return fetch(ROOT_URL + `/users/login`, {
      method: "POST",
      headers: {
          "Content-Type": "application/json; charset=utf-8",
          Accept: "application/json"
      },
      body: JSON.stringify({user:{username: username, password: password}})
  })
  .then(r  => r.json())
  .then(json => setUser(json, dispatch))
}

//helper function that sets the user object in store and in localStorage
function setUser(json, dispatch){
    if (json["success"]){
    localStorage.setItem('token', `${json["token"]}`);
    dispatch({type: SET_CURRENT_USER, payload: json["userObj"]})
    
    }else{
        alert("Wrong username/password")
    }
} 

export const createUser= (submitData) => (dispatch) => {
    dispatch({type: LOADING});
    const {username, password, firstName, lastName, startDate} = submitData
   return fetch(ROOT_URL + `/users`, {
      method: "POST",
      headers: {
          "Content-Type": "application/json; charset=utf-8",
          Accept: "application/json"
      },
      body: JSON.stringify({user:{username: username, password: password, firstName: firstName, lastName: lastName, startDate: startDate}})
  })
  .then(r  => r.json())
  .then(json => setUser(json, dispatch))

} 


export const logoutUser = () => (dispatch) => {
    dispatch({type: LOGOUT})
    localStorage.clear()
}

export const getUser = () => (dispatch) => {
    dispatch({type: LOADING});
    fetch(ROOT_URL + "/users/my-page", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`
            },
    })
    .then(r => r.json())
    .then( json => dispatch({type: SET_CURRENT_USER, payload: json}))
}

//update user
export const updateUser = (data, userId) => (dispatch) => {
    dispatch({type: LOADING});
    const noteId = data.noteId;
    const noteObj = data.content;
    const existingCategory = data.dropDownValueArray 
    const newCategory = data.newCategory
    const userObj= {user: {note: {userId: userId, noteId: noteId, noteObj: noteObj, categoryId: existingCategory, 
                                           newCategory: newCategory, public: data.public}}}
    fetch(ROOT_URL + "/users/my-page", {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`
            },
        body: JSON.stringify(userObj)
    })
    .then(r => r.json())
    .then(json => helpGetNewCat(json, dispatch) )
}


