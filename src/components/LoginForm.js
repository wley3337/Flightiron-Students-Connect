import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react'
import { Redirect } from 'react-router'
import { connect } from 'react-redux'
import * as actions from '../redux/actions'

class LoginForm extends Component {

 state = {
    redirect: false,
    username: "",
    password: "",
    user: null
    }

 onChange = (e) =>{
    this.setState({
        [e.target.name]: e.target.value
    })
 }

 onSubmit= (e) =>{
    e.preventDefault()
    this.props.userLogin(this.state.username, this.state.password)
    this.setState({
        redirect: true
    })
 }

 render(){
    return( 
        
        this.state.redirect ? < Redirect to="/my-page"/> 
        
        : 
        
        <Form onSubmit={this.onSubmit}>
            <Form.Group widths='equal'>
            <Form.Input
                fluid
                id='form-subcomponent-shorthand-input-first-name'
              
                name="username"
                value={this.state.username}
                placeholder='username'
                onChange={this.onChange}
            />
            <Form.Input
                fluid
                id='form-subcomponent-shorthand-input-last-name'
               
                value={this.state.password}
                placeholder='password'
                onChange={this.onChange}
                name="password"
            />
            <Form.Field control={Button} >Submit</Form.Field>
            </Form.Group>
        </Form>
        )
 }

}

export default connect(null, actions)(LoginForm)