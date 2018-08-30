import { Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import React from 'react'

const HomeScreenButtons = () =>
    <div>
        
        <Button inverted as={ Link }  to="/login" color="blue">Log-In</Button>
        <Button inverted as={ Link }  to="/create-user" color="teal">Create Account</Button>

    </div>

export default HomeScreenButtons
