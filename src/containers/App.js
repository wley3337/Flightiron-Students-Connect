import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react'
import { connect } from 'react-redux'
import * as actions from '../redux/actions'





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

  setLogedIn=(json)=>{
    localStorage.setItem('token', `${json["token"]}`)
    this.setState({
      username: '',
      password: '',
      user: json["userObj"]
    })
  }
  onSubmit= (e) =>{
    e.preventDefault()
    this.props.userLogin(this.state.username, this.state.password)
  }
  
  render() {
    return (
      <div className="App">
       <Form onSubmit={this.onSubmit}>
    <Form.Group widths='equal'>
      <Form.Input
        fluid
        id='form-subcomponent-shorthand-input-first-name'
        label='username'
        name="username"
        value={this.state.username}
        placeholder='username'
        onChange={this.onChange}
      />
      <Form.Input
        fluid
        id='form-subcomponent-shorthand-input-last-name'
        label='password'
        value={this.state.password}
        placeholder='password'
        onChange={this.onChange}
        name="password"
      />
      <Form.Field control={Button}>Submit</Form.Field>
    </Form.Group>
  </Form>
      </div>
    );
  }
}

export default connect(null, actions)(App);
