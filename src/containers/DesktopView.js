import React from 'react'
import { Route } from 'react-router-dom'
import { Redirect } from 'react-router'

import ViewContainer from './ViewContainer'
import SelectionContainer from './SelectionContainer'
import NavBar from './NavBar'
import ReferenceContainer from './ReferenceContainer'
import ReferenceCreateBar from '../components/ReferenceCreateBar'
import NewReferenceForm from '../components/NewReferenceForm'






const DesktopView = () =>{
 return(
    !localStorage.getItem('token') ?   
        <Redirect to="/"/>
    : 
        <React.Fragment>
            <Route path="/select" render={() => <NavBar/>} />
            <Route path="/select/" render={() =>  <ViewContainer/> }/>
            <Route exact path="/select/notes" render={() =>  <SelectionContainer/> }/>
            <Route exact path="/select/my-page" render={() =>  <SelectionContainer/> }/>
            <Route exact path="/select/references" render={() => <ReferenceContainer/>}/>
            <Route exact path="/select/references/new" render={() => <ReferenceCreateBar />}/>
            <Route exact path="/select/references/new" render={() => <NewReferenceForm />}/> 
        </React.Fragment>
 )
}


export default DesktopView