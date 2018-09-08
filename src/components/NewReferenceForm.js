import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../redux/actions'
import {Dimmer, Loader, Checkbox } from 'semantic-ui-react'
import { Redirect } from 'react-router'

// css styling : select-reference, select-reference-search-bar


class NewReferenceForm extends React.Component{

handleCreateNewReference = () =>{
    const {title, link, dropDownValueArray} = this.props.newReference
    const referenceObj = {
        title: title,
        link: link,
        categoryIdArray: dropDownValueArray
    }
    debugger
    this.props.createNewReference(referenceObj)
}


render(){
    return(
      <div id="select-reference-create-input-container">
          <input 
            type="text" 
            placeholder="Title of Reference"
            value={this.props.newReference.title} 
            onChange={(e) => this.props.setReferenceTitle(e.target.value)}
          />
           <input 
            type="text" 
            placeholder="Url Link of Reference"
            value={this.props.newReference.link} 
            onChange={(e) => this.props.setReferenceLink(e.target.value)}
          />

          <button 
            onClick={this.handleCreateNewReference}
          >
            Create New Reference
          </button>
      </div>
    )
}

}

const mapStateToProps= (state) =>{
    return {
        newReference: state.newReference
    }
}


export default connect(mapStateToProps, actions)(NewReferenceForm)