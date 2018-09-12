import { UPDATE_REFERENCE_CATEGORIES,SET_REFERENCE_LINK, SET_REFERENCE_TITLE, CLEAR_NEW_REFERENCE, SET_REFERENCES, SET_CURRENT_USER, UPDATE_REFERENCES, SET_EXISTING_REFERENCE, CLEAR_EXISTING_REFERENCE, ADD_REFERENCE_HISTORY, REMOVE_REFERENCE_HISTORY, SET_REFERENCE_OFFSET_ID, CLEAR_REFERENCE_OFFSET_ID, SET_MORE_REFERENCES, CLEAR_REFERENCE_HISTORY} from './types'
import { ROOT_URL } from './index'


export const setReferenceTitle = (title) =>
    ({type: SET_REFERENCE_TITLE, payload: title})

export const setReferenceLink = (link) =>
    ({type: SET_REFERENCE_LINK, payload: link})

export const updateReferenceCategories = (dropdownCatId) => 
    ({type: UPDATE_REFERENCE_CATEGORIES, payload: dropdownCatId})

export const clearNewReference = () =>
    ({type: CLEAR_NEW_REFERENCE})


export const createNewReference = (newRefObj) => (dispatch) =>{
    const {title, link, categoryIdArray} = newRefObj
    const existingCategory = categoryIdArray.filter(element => typeof(element) === "number")
    const newCategory = categoryIdArray.filter(element => typeof(element) === "string")

    const referenceObj = {reference: {title: title, link: link, category: {existingCategory: existingCategory, newCategory: newCategory}}}
   
    fetch(ROOT_URL + "/references", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`
            },
        body: JSON.stringify(referenceObj)
    })
    .then(r => r.json())
    .then(json =>handleNewReferenceResponse(json, dispatch))
}

function handleNewReferenceResponse(json, dispatch){
    dispatch({type: SET_CURRENT_USER, payload: json["userObj"]});
    dispatch({type: UPDATE_REFERENCES, payload: json})
    if(json["existingReference"]){
        // send to existingReferenceReducer
        dispatch({type: SET_EXISTING_REFERENCE, payload: [json["existingReference"]]})

    }

}

export const clearExistingReference = () =>({type: CLEAR_EXISTING_REFERENCE})




export const getReferences = (referenceStartId) => (dispatch) =>{
    fetch(ROOT_URL + "/references/" + referenceStartId, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`
            },
    })
    .then(r => r.json())
    .then(json =>handleSettingPublicReferences(json, dispatch))
}


export const setReferenceOffsetId = (id) =>({type: SET_REFERENCE_OFFSET_ID, payload: id})
export const clearReferenceOffsetId = () =>({type: CLEAR_REFERENCE_OFFSET_ID})
export const clearReferenceHistory = () => ({type: CLEAR_REFERENCE_HISTORY})


function handleSettingPublicReferences(json, dispatch){
 
  if(json["references"].length > 0){ 
    dispatch(setReferenceOffsetId(json["references"][json["references"].length-1].reference.id))
  }
  dispatch({type: SET_REFERENCES, payload: json});
}




export const addPublicReferenceHistory = (currentPublicReferencesArray)=>
   ({type: ADD_REFERENCE_HISTORY, payload: currentPublicReferencesArray })

export const removePublicReferenceHistory = () =>({type: REMOVE_REFERENCE_HISTORY})


export const nextReferences = (id, currentPublicReferencesArray) => (dispatch) => {
    //add reference to history
    dispatch(addPublicReferenceHistory(currentPublicReferencesArray))
    //fetch reference based on starting reference id
    dispatch(getReferences(id))
}

export const lastReferences = (publicReferencesHistory) => (dispatch) =>{
  dispatch({type: SET_REFERENCES, payload: {references: publicReferencesHistory[publicReferencesHistory.length -1], more: true}})
    if(publicReferencesHistory.length > 1 ){

      const lastId = publicReferencesHistory[publicReferencesHistory.length -1][publicReferencesHistory[publicReferencesHistory.length -1].length -1].reference.id
      dispatch(setReferenceOffsetId(lastId))
      dispatch({type: SET_MORE_REFERENCES, payload: true})
    }else{
      dispatch(setReferenceOffsetId(0))
      dispatch({type: SET_MORE_REFERENCES, payload: true})
    }
  
  dispatch(removePublicReferenceHistory())
}








