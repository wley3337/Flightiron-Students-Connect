
import { LOADING, SET_CURRENT_USER, CREATE_USER, GET_ALL_CATEGORIES } from './types'

const ROOT_URL = "http://127.0.0.1:3001"


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


} 



//fetch catagories
export const getCategories = () => dispatch => {
    dispatch({type: LOADING});
   return fetch(ROOT_URL + `/categories` )
  .then(r  => r.json())
  .then(json => dispatch({type: GET_ALL_CATEGORIES, payload: json}))
}





// function myThunkActionCreator(someValue) {
//     return (dispatch, getState) => {
//         dispatch({type : "REQUEST_STARTED"});
        
//         myAjaxLib.post("/someEndpoint", {data : someValue})
//             .then(
//                 response => dispatch({type : "REQUEST_SUCCEEDED", payload : response}),
//                 error => dispatch({type : "REQUEST_FAILED", error : error})
//             );    
//     };
// }

// only has access to what's passed in
// const url = "http://localhost:3000/profiles";

// //       mount()
// //         |
// //     dispatch(() => {})
// //         |                     \
// // dispatch({ type: "FETCHING" })    dispatch({type: "FETCHED"})

// const loadProfile = () => dispatch => {
//   dispatch({ type: "FETCHING_PROFILE" });
//   fetch(url)
//     .then(resp => resp.json())
//     .then(profiles => dispatch({ type: "FETCHED_PROFILES", profiles }));
// };

// export { loadProfile };