import React from 'react'
import { Route } from 'react-router-dom'

import ViewContainer from './ViewContainer'
import SelectionContainer from './SelectionContainer'
import NavBar from './NavBar'
import ReferenceContainer from './ReferenceContainer'
import ReferenceCreateBar from '../components/ReferenceCreateBar'
import NewReferenceForm from '../components/NewReferenceForm'






const TabletHandHeldView = () =>{
 return(
    <React.Fragment>
        <Route path="/select" render={() => <NavBar/>} />
        <Route exact path="/select/my-page" render={() =>  <ViewContainer/> }/>
        <Route exact path="/select/notes" render={() =>  <SelectionContainer/> }/>
        <Route exact path="/select/references" render={() => <ReferenceContainer/>}/>
        <Route exact path="/select/references/new" render={() => <ReferenceCreateBar />}/>
        <Route exact path="/select/references/new" render={() => <NewReferenceForm />}/>
    </React.Fragment>
 )
}


export default TabletHandHeldView