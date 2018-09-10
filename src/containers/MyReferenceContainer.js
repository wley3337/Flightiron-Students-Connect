import React from 'react'

import ReferenceSearchBar from '../components/ReferenceSearchBar'
import { Dropdown, Label } from 'semantic-ui-react'
import { connect } from 'react-redux'
import * as actions from '../redux/actions'
import {Dimmer, Loader, Checkbox } from 'semantic-ui-react'
import { Redirect } from 'react-router'

// css styling : select-reference, select-reference-search-bar


class MyReferenceContainer extends React.Component{

    componentDidMount(){
        
        if(localStorage.getItem('token')){
        this.props.getUser()
        this.props.getCategories()
        }
      
    }

render(){
    return(
        <React.Fragment>
           
           
        <ReferenceSearchBar />
        <p>MyReferenceContainer</p>
       </React.Fragment>
    )
}

}




export default connect(null, actions)(MyReferenceContainer)