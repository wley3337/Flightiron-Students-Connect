import { Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import React from 'react'

const HomeScreenButtons = ({match}) =>
    <div>
        HomeScreenButtons

       
        <Button inverted as={ Link }  to={`${match.url}login`} color="blue">Log In</Button>
        <Button inverted as={ Link }  to={`${match.url}create-user`} color="teal">Create Account</Button>
       
        
    </div>

export default HomeScreenButtons
