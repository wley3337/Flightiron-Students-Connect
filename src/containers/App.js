import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react'
import { connect } from 'react-redux'
import * as actions from '../redux/actions'
import LoginForm from './LoginForm';

class App extends Component {
  state = {
    username: "",
    password: "",
    user: null
  }
  onChange =(e) =>{
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSubmit= (e) =>{
    e.preventDefault()
    this.props.userLogin(this.state.username, this.state.password)
  }

  render() {
    return (
      <div>
        <LoginForm />
        
      </div>
    );
  }
}

export default App;
