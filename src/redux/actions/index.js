
import { LOADING, SET_CURRENT_USER} from './types'



export const userLogin = (username, password) => dispatch => {
    dispatch({type: LOADING});
   return fetch(`http://127.0.0.1:3001/users/login`, {
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

function setUser(json, dispatch){
    localStorage.setItem('token', `${json["token"]}`);
    dispatch({type: SET_CURRENT_USER, payload: json["userObj"]})
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