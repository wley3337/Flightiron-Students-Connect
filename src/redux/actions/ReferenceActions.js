import { UPDATE_REFERENCE_CATEGORIES,SET_REFERENCE_LINK, SET_REFERENCE_TITLE, CLEAR_NEW_REFERENCE, SET_REFERENCES } from './types'
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
    .then(json =>{debugger} )


}

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
    .then(json =>{dispatch({type: SET_REFERENCES, payload: json})} )
}









