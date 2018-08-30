import React, { Component } from 'react';
import { connect } from 'react-redux'
// import * as actions from '../redux/actions'
import LoginForm from '../components/LoginForm'
import CreateUserForm from '../components/CreateUserForm'
import HomeScreenButtons from '../components/HomeScreenButtons';
import ViewContainer from './ViewContainer';
import SelectionContainer from './SelectionContainer'
import NavBar from './NavBar'

import { Route } from 'react-router-dom'

class App extends Component {
 

  render() {
    return (
      <div>
          <Route exact path="/" component={HomeScreenButtons}/>
          <Route exact path="/login" component={  LoginForm } />
          <Route exact path="/create-user" component={  CreateUserForm } />
          <Route exact path="/my-page" component={ NavBar} />
          <Route exact path="/my-page" render={() =>  <ViewContainer/> }/>
          <Route exact path="/my-page" render={() =>  <SelectionContainer/> }/>
      </div>
    );
  }
}



export default App;
