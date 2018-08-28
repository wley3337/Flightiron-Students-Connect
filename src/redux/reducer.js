import { combineReducers } from 'redux';



const currentUserReducer =( state = "user", action ) =>{

    switch(action.type){
        case "LOADING":
        return (console.log("loading"), state)
        
        case "SET_CURRENT_USER":
        return action.payload
        default:
        return state
    }

}



const reducers ={
    currentUser: currentUserReducer
}

export default combineReducers(reducers)