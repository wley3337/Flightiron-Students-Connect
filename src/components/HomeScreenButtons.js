import { Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import React from 'react'

const HomeScreenButtons = () =>
    <div id="home-screen"> 
        
        <Button id="login" inverted as={ Link }  to="/login" >Log-In</Button>
        <Button id="create-account" inverted as={ Link }  to="/create-user" >Create Account</Button>

    </div>

export default HomeScreenButtons
