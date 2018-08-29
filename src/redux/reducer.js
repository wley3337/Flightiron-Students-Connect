import { combineReducers } from 'redux';



const currentUserReducer =( state = null, action ) =>{

    switch(action.type){
        case "LOADING":
        return (console.log("loading"), state)
        
        case "SET_CURRENT_USER":
        return action.payload
        
        case "CREATE_USER":
        return state

        default:
        return state
    }

}

const viewReducer = (state = {}, action) =>{
    switch(action.type){
     

        default:
        return (console.log("viewReducer"), state)
    }

}

const notesReducer = (state = [], action) =>{
    switch(action.type){
        case "SET_CURRENT_USER":
        return action.payload.notes
        default:
        return state
    }
}

const categoryReducer = (state =[], action) =>{
    switch(action.type){
        case "GET_ALL_CATEGORIES":
        return action.payload
        default:
        return state
    }
}



const reducers ={
    currentUser: currentUserReducer,
    view: viewReducer,
    notes: notesReducer,
    categories: categoryReducer
}

export default combineReducers(reducers)