import { combineReducers } from 'redux';
import { LOADING, SET_CURRENT_USER, LOGOUT, DELETE_NOTE, SET_FOCUS_NOTE, UPDATE_PUBLIC,
         UPDATE_CATEGORIES, UPDATE_NOTE_CONTENT, UPDATE_NEW_CATEGORY, GET_ALL_CATEGORIES,
         ADD_CATEGORY, GET_ALL_PUBLIC_NOTES, SET_FLASH_MESSAGE, DELETE_FLASH_MESSAGE, 
         SET_SEARCH_TERM, SET_SEARCH_CATEGORY_ID, CLEAR_SEARCH_CATEGORY_ID, SET_OWNER_FOCUS, SET_REFERENCE_SEARCH_CATEGORY_ID, CLEAR_REFERENCE_SEARCH_CATEGORY_ID} from './actions/types'



const currentUserReducer =( state = null, action ) =>{

    switch(action.type){
        case LOADING:
        return state
        
        case SET_CURRENT_USER:
        return action.payload

        case LOGOUT:
        return null

        default:
        return state
    }

}
        

const viewReducer = (state = {noteId: null, content: "", dropDownValueArray: [], public: false, noteUserId: null, newCategory: ""}, action) =>{
    // {note: {noteId: null, note_content: "", public_note: false, user.id: null}, categories: []}
    switch(action.type){

        case SET_FOCUS_NOTE:
        const {note, categories} = action.payload

        return {content: note.note_content, dropDownValueArray: categories.map(cat => cat.id), public: note.public_note, noteUserId: note.user_id, noteId: note.id, newCategory: ""}

        case UPDATE_CATEGORIES:
        return {...state, dropDownValueArray: action.payload}

        case UPDATE_NOTE_CONTENT:
        return {...state, content: action.payload}

        case UPDATE_PUBLIC:
        return {...state, public: !action.payload}

        case UPDATE_NEW_CATEGORY:
        return {...state, newCategory: action.payload}
     
        default:
        return  state
    }

}

const notesReducer = (state = [], action) =>{
    switch(action.type){

        case SET_CURRENT_USER:
        return  action.payload.notes 
     
        case LOGOUT:
        return []

        default:
        return state
    }
}

const categoryReducer = (state =[], action) =>{
    switch(action.type){
        
        case GET_ALL_CATEGORIES:
        return action.payload

        case ADD_CATEGORY:
        return [...state, action.payload]

        default:
        return state
    }
}

const publicNoteReducer = (state =[], action) =>{
    switch(action.type){

        case GET_ALL_PUBLIC_NOTES:
        return action.payload.notes

        default:
        return state
    }
}

const moreNotesReducer = (state = false, action) =>{
    switch(action.type){

        case GET_ALL_PUBLIC_NOTES:
        return action.payload.more

        default:
        return state
    }

}

const flashMessageReducer =(state=[], action) =>{
    switch(action.type){
        
        case SET_FLASH_MESSAGE:
        return [action.payload]

        case DELETE_FLASH_MESSAGE:
        return []

        default:
        return state
    }
}

const searchTermReducer = (state ="", action) =>{
    switch(action.type){
        case SET_SEARCH_TERM:
        return action.payload
        default:
        return state
    }
}

const notesOffsetIdReducer =(state = 0, action)=>{
    switch(action.type){


        default:
        return state
    }
}

const referenceOffsetIdReducer =(state = 0, action)=>{
    switch(action.type){


        default:
        return state
    }
}

//this is for notes
const searchCategoryIdReducer = (state="", action) => {
    switch(action.type){
        
        case SET_SEARCH_CATEGORY_ID:
        return action.payload

        case CLEAR_SEARCH_CATEGORY_ID:
        return ""
        
        default:
        return state 
    }
}

const referenceSearchCategoryIdReducer = (state="", action) => {
    switch(action.type){
        
        case SET_REFERENCE_SEARCH_CATEGORY_ID:
        return action.payload

        case CLEAR_REFERENCE_SEARCH_CATEGORY_ID:
        return ""
        
        default:
        return state 
    }
}
const moreReferencesReducer = (state = false, action) =>{
    switch(action.type){

        // case GET_ALL_PUBLIC_NOTES:
        // return action.payload.more

        default:
        return state
    }

}

const referenceSearchResultsIdReducer = (state="", action) => {
    switch(action.type){
        
        // case SET_REFERENCE_SEARCH_CATEGORY_ID:
        // return action.payload

        // case CLEAR_REFERENCE_SEARCH_CATEGORY_ID:
        // return ""
        
        default:
        return state 
    }
}

const ownerFocusReducer = (state ="myNotes", action) =>{
    switch(action.type){

        case SET_OWNER_FOCUS:
        return action.payload

        default:
        return state
    }
}





const reducers ={
    currentUser: currentUserReducer,
    view: viewReducer,
    notes: notesReducer,
    categories: categoryReducer,
    publicNotes: publicNoteReducer,
    flashMessage: flashMessageReducer,
    searchTerm: searchTermReducer,
    ownerFocus: ownerFocusReducer,
    searchCategoryId: searchCategoryIdReducer,
    noteOffsetId: notesOffsetIdReducer,
    referenceOffsetId: referenceOffsetIdReducer,
    referenceSearchCategoryId: referenceSearchCategoryIdReducer,
    moreNotes: moreNotesReducer,
    moreReferences: moreReferencesReducer,
    referenceSearchResultsId: referenceSearchResultsIdReducer
}

export default combineReducers(reducers)