import React from 'react'
//test file dependancy 
import { publicNoteReducer } from '../../redux/reducer'
import { GET_ALL_PUBLIC_NOTES } from '../../redux/actions/types'

// export const publicNoteReducer = (state =[], action) =>{
//     switch(action.type){

//         case GET_ALL_PUBLIC_NOTES:
//         return action.payload.notes

//         default:
//         return state
//     }
// }

describe('publicNoteReducer: ', () =>{
    const initAction = { type: `@@init` }
    const setAction = { type: GET_ALL_PUBLIC_NOTES, payload: {thing: "stuff", notes: {name: 'New Note', id: 1} }  }
    //test categoryReducer to return the correct state is this how you connect a combinereducers?
    it('publicNoteReducer returns correct state on @@init', ()=>{
        expect(publicNoteReducer(undefined, initAction)).toEqual([])
    });

    it('returns an updated state containing a note object', ()=>{
        expect(publicNoteReducer([], setAction)).toEqual({name: 'New Note', id:1})
    })
})