import React from 'react'
import { currentUserReducer } from '../../redux/reducer'
import { LOADING, SET_CURRENT_USER, LOGOUT } from '../../redux/actions/types'

describe('Current User Reducer Tests: ', () =>{
    const initAction = {type: '@@init'}
    const loadingAction = {type: LOADING }
    const setCurrentUserAction = {type: SET_CURRENT_USER, payload: {name: 'testUser'}}
    const logoutAction = {type: LOGOUT}

    it('Initial state', ()=>{
        expect(currentUserReducer(undefined, initAction)).toEqual(null)
    })

    it('Loading action:', ()=>{
        expect(currentUserReducer({}, loadingAction)).toEqual({})
    })

    it('Set Current User Action', ()=>{
        expect(currentUserReducer(null, setCurrentUserAction)).toEqual({name: 'testUser'})
    })

    it('Logout Action', ()=>{
        expect(currentUserReducer({name: 'testUser'}, logoutAction)).toEqual(null)
    })
})