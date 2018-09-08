import { DELETE_NOTE, LOADING } from './types'
import { setUser } from './UserActions'
import { ROOT_URL } from './index'


 export const deleteNote= (noteInfo) => (dispatch) =>{
    dispatch({type: LOADING});

    fetch(ROOT_URL + "/notes", {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`
            },
        body: JSON.stringify(noteInfo)
    })
    .then(r => r.json())
    .then(json => setUser(json, dispatch))


 }