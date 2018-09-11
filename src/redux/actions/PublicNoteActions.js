import { GET_ALL_PUBLIC_NOTES, LOADING, SET_NOTE_OFFSET_ID, CLEAR_NOTE_OFFSET_ID, ADD_NOTE_HISTORY, REMOVE_NOTE_HISTORY, SET_MORE_NOTES } from './types'
import { ROOT_URL } from './index'

export const getAllPublicNotes = (id) => (dispatch) =>{
    dispatch({type: LOADING});
    return fetch(ROOT_URL + `/notes/${id}`,
    {headers: {
     "Content-Type": "application/json",
     Accept: "application/json",
     Authorization: `Bearer ${localStorage.getItem("token")}`
     },} )
   .then(r  => r.json())
   .then(json => handleSettingPublicNotes(json, dispatch))
    
}

function handleSettingPublicNotes(json, dispatch){
 
  if(json["notes"].length > 0){
    
    dispatch(setNoteOffsetId(json["notes"][json["notes"].length-1].note.id))
  }
  dispatch({type: GET_ALL_PUBLIC_NOTES, payload: json});
}

export const setNoteOffsetId = (id) =>({type: SET_NOTE_OFFSET_ID, payload: id})
export const clearNoteOffsetId = () =>({type: CLEAR_NOTE_OFFSET_ID})


export const addPublicNoteHistory = (currentPublicNotesArray)=>
   ({type: ADD_NOTE_HISTORY, payload: currentPublicNotesArray })

export const removePublicNoteHistory = () =>({type: REMOVE_NOTE_HISTORY})


export const nextNotes = (id, currentPublicNotesArray) => (dispatch) => {
    //add notes to history
    dispatch(addPublicNoteHistory(currentPublicNotesArray))
    //fetch notes based on starting note id
    dispatch(getAllPublicNotes(id))
}

export const lastNotes = (publicNoteHistory) => (dispatch) =>{
  dispatch({type: GET_ALL_PUBLIC_NOTES, payload: {notes: publicNoteHistory[publicNoteHistory.length -1]}})
    if(publicNoteHistory.length > 1 ){

      const lastId = publicNoteHistory[publicNoteHistory.length -1][publicNoteHistory[publicNoteHistory.length -1].length -1].note.id
      dispatch(setNoteOffsetId(lastId))
      dispatch({type: SET_MORE_NOTES, payload: true})
    }else{
      dispatch(setNoteOffsetId(0))
      dispatch({type: SET_MORE_NOTES, payload: true})
    }
  
  dispatch(removePublicNoteHistory())
}


