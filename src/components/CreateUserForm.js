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
        <form onSubmit={this.onSubmit} id="form-style" >
            
            <input
                id="li-user-name"
                className="text-bg-stnd"
                
                name="username"
                value={this.state.username}
                placeholder='username'
                onChange={this.onChange}
            />
            <input
                id="li-password"
                className="text-bg-stnd"
                
                value={this.state.password}
                placeholder='password'
                onChange={this.onChange}
                name="password"
            />
             <input
                id="cu-first-name"
                className="text-bg-stnd"
                value={this.state.firstName}
                placeholder='First Name'
                onChange={this.onChange}
                name="firstName"
            />
             <input
                id="cu-last-name"
                className="text-bg-stnd"
                value={this.state.lastName}
                placeholder='Last Name'
                onChange={this.onChange}
                name="lastName"
            />
             <input
                id="cu-start-date"
                className="text-bg-stnd"
                value={this.state.startDate}
                placeholder='Start Date : YYYY-MM-DD'
                onChange={this.onChange}
                name="startDate"
            />
            <input 
                id="cu-submit"
                className="text-bg-stnd"
                type="submit" 
                value="Create an account"
            />
            
        </form>
        )
 }

}
const mapStateToProps= (state) =>{
    return {currentUser: state.currentUser}
}

export default connect(mapStateToProps, actions)(CreateUserForm)