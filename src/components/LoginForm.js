import React, { Component } from 'react';
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
    this.props.deleteFlashMessage()
    this.props.userLogin(this.state.username, this.state.password)
 }

 render(){
    return( 
        localStorage.getItem('token') ? <Redirect to="/select/notes"/>  :
        <div id = "full-window">
            
            <form onSubmit={this.onSubmit} id = "login-form">
            {this.props.flashMessage.length > 0 ? <p id="error-placement">Wrong username or password.</p> : null}
                <input
                    type="text"
                    id="li-user-name"
                    className="text-bg-stnd"
                    name="username"
                    value={this.state.username}
                    placeholder='username'
                    onChange={this.onChange}
                />
                <input 
                    type="text"
                    id="li-password"
                    className="text-bg-stnd"
                    value={this.state.password}
                    placeholder='password'
                    onChange={this.onChange}
                    name="password"
                />
                <input 
                    name="Log-In"
                    className="text-bg-stnd"
                    type="Submit" 
                    id="li-submit"
                    value="Log-In"
                    onClick={this.onSubmit}
                    />
                   
            </form>
        </div>
        )
 }

}

const mapStateToProps= (state) =>{
    return {
        currentUser: state.currentUser,//doesn't seem to need this
        flashMessage: state.flashMessage
    }
}

export default connect(mapStateToProps, actions)(LoginForm)