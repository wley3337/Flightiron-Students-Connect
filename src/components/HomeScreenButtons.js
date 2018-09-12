import React from 'react'
import { Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from '../redux/actions'

const HomeScreenButtons = (props) =>
    <div id="home-screen"> 
        
        <Button id="login" inverted as={ Link }  to="/login" onClick={props.deleteFlashMessage}>Log-In</Button>
        <Button id="create-account" inverted as={ Link }  to="/create-user" onClick={props.deleteFlashMessage}>Create Account</Button>

    </div>

export default connect(null, actions)(HomeScreenButtons)
