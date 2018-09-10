import React, { Component } from 'react';
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
    this.props.deleteFlashMessage()
    this.props.createUser(this.state)
 }

 handleErrorDisplayUsername = () =>{
    
  return  !this.props.flashMessage[0].errors.username[0].includes("can't") ? 
       <p>Username has already been taken</p> : null
 }

 handleErrorDisplay = () =>{
    if(this.props.flashMessage[0].errors){
     const errorMessages = this.props.flashMessage[0].errors;
     let blankError;
     const usernameTaken =
        !errorMessages.username[0].includes("can't") ? "Username has already been taken." : null;
     const usernameBlank = 
            errorMessages.username[0].includes("can't") ? true : false;
     if(usernameBlank || errorMessages.password_name || errorMessages.first_name || errorMessages.last_name){
        blankError = "All fields except Start Date are required."
     } 
    return(<p>{usernameTaken} {blankError}</p>)}
 }

 render(){
    return( 
        localStorage.getItem('token') ? <Redirect to="/select/notes"/> :
        <form onSubmit={this.onSubmit} id="form-style" >
             {this.props.flashMessage.length > 0 ?  
                <div id="error-placement">
                    {this.handleErrorDisplay()}
                </div>
                
                
                : null}
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
                type="date"
                id="cu-start-date"
                className="text-bg-stnd"
                value={this.state.startDate}
                placeholder='Start Date'
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
    return {
        currentUser: state.currentUser,
        flashMessage: state.flashMessage
    }
}

export default connect(mapStateToProps, actions)(CreateUserForm)