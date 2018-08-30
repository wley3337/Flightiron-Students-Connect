import { combineReducers } from 'redux';



const currentUserReducer =( state = null, action ) =>{

    switch(action.type){
        case "LOADING":
        return state
        
        case "SET_CURRENT_USER":
        return action.payload
        
        case "CREATE_USER":
        return state

        case "LOGOUT":
        return null

        default:
        return state
    }

}

const viewReducer = (state = {}, action) =>{
    switch(action.type){
     

        default:
        return  state
    }

}

const notesReducer = (state = [], action) =>{
    switch(action.type){

        case "SET_CURRENT_USER":
        return (action.payload.notes ? action.payload.notes : state)

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