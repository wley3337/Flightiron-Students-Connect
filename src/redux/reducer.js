import { combineReducers } from 'redux';



const currentUserReducer =( state = null, action ) =>{

    switch(action.type){
        case "LOADING":
        return state
        
        case "SET_CURRENT_USER":
        return action.payload
        
        // case "CREATE_USER":
        // return state

        case "LOGOUT":
        return null

        default:
        return state
    }

}
        

const viewReducer = (state = {noteId: null, content: "", dropDownValueArray: [], public: false, noteUserId: null, newCategory: ""}, action) =>{
    // {note: {noteId: null, note_content: "", public_note: false, user.id: null}, categories: []}
    switch(action.type){

        case "SET_FOCUS_NOTE":
        const {note, categories} = action.payload

        return {content: note.note_content, dropDownValueArray: categories.map(cat => cat.id), public: note.public_note, noteUserId: note.user_id, noteId: note.id, newCategory: ""}

        case "UPDATE_CATEGORIES":
        return {...state, dropDownValueArray: action.payload}

        case "UPDATE_NOTE_CONTENT":
        return {...state, content: action.payload}

        case "UPDATE_PUBLIC":
        return {...state, public: !action.payload}

        case "UPDATE_NEW_CATEGORY":
        return {...state, newCategory: action.payload}
     
        default:
        return  state
    }

}

const notesReducer = (state = [], action) =>{
    switch(action.type){

        case "SET_CURRENT_USER":
        // const newCollection =[...state, ...action.payload.notes]
        // return [...new Set(newCollection)]
        return  action.payload.notes 
        // return [...state, action.payload.notes][0]

        case "LOGOUT":
        return []

        default:
        return state
    }
}

const categoryReducer = (state =[], action) =>{
    switch(action.type){
        
        case "GET_ALL_CATEGORIES":
        return action.payload

        case "ADD_CATEGORY":
        return [...state, action.payload]

        default:
        return state
    }
}

const publicNoteReducer = (state =[], action) =>{
    switch(action.type){

        case "GET_ALL_PUBLIC_NOTES":
        return action.payload

        default:
        return state
    }
}

const flashMessageReducer =(state=[], action) =>{
    switch(action.type){
        
        case "SET_FLASH_MESSAGE":
        return [action.payload]

        case "DELETE_FLASH_MESSAGE":
        return []

        default:
        return state
    }
}

const searchTermReducer = (state ="", action) =>{
    switch(action.type){
        case "SET_SEARCH_TERM":
        return action.payload
        default:
        return state
    }
}

const searchCategoryIdReducer = (state="", action) => {
    switch(action.type){
        
        case "SET_SEARCH_CATEGORY_ID":
        return action.payload

        default:
        return state 
    }
}

const ownerFocusReducer = (state ="myNotes", action) =>{
    switch(action.type){
        case "SET_OWNER_FOCUS":
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
    searchCategoryId: searchCategoryIdReducer
}

export default combineReducers(reducers)