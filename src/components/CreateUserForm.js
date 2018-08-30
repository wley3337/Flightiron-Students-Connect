import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react'
import { connect } from 'react-redux'
import * as actions from '../redux/actions'
import {Redirect} from 'react-router'

class CreateUserForm extends Component {

 state = {
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    startDate: "",
    user: null
    }

 onChange = (e) =>{
    this.setState({
        [e.target.name]: e.target.value
    })
 }

 onSubmit= (e) =>{
    e.preventDefault()
    this.props.createUser(this.state)
 }

 render(){
    return( 
        localStorage.getItem('token') ? <Redirect to="/my-page"/> :
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
             <Form.Input
                fluid
                id='form-subcomponent-shorthand-input-last-name'
                
                value={this.state.firstName}
                placeholder='First Name'
                onChange={this.onChange}
                name="firstName"
            />
             <Form.Input
                fluid
                id='form-subcomponent-shorthand-input-last-name'
                
                value={this.state.lastName}
                placeholder='Last Name'
                onChange={this.onChange}
                name="lastName"
            />
             <Form.Input
                fluid
                id='form-subcomponent-shorthand-input-last-name'
               
                value={this.state.startDate}
                placeholder='Start Date : YYYY-MM-DD'
                onChange={this.onChange}
                name="startDate"
            />
            <Form.Field control={Button}>Submit</Form.Field>
            </Form.Group>
        </Form>
        )
 }

}
const mapStateToProps= (state) =>{
    return {currentUser: state.currentUser}
}

export default connect(mapStateToProps, actions)(CreateUserForm)