import React, { Component } from 'react';
// import { connect } from 'react-redux'
// import * as actions from '../redux/actions'
import LoginContainer from './LoginContainer';
import ViewContainer from './ViewContainer';
import SelectionContainer from './SelectionContainer'
import LoginForm from '../components/LoginForm'
import CreateUserForm from '../components/CreateUserForm'
import { Route } from 'react-router-dom'

class App extends Component {
 

  render() {
    return (
      <div>
        <Route exact path="/" component={LoginContainer}/>
        <Route exact path={`/login`} component={  LoginForm } />
        <Route exact path={`/create-user`} component={  CreateUserForm } />
        <Route exact path="/my-page" component={ViewContainer}/>
        <Route exact path="/my-page" component={SelectionContainer}/>
      </div>
    );
  }
}

export default App;
