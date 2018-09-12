import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../redux/actions'
import { Redirect } from 'react-router'


class NewReferenceForm extends React.Component{
    state ={
        error: {title: null, link: null},
        redirect: false
    }

handleCreateNewReference = () =>{
    const {title, link, dropDownValueArray} = this.props.newReference
    if (link.slice(0,4) === "http" && title ){
        const referenceObj = {
            title: title,
            link: link,
            categoryIdArray: dropDownValueArray
        }
        this.props.createNewReference(referenceObj)
        this.props.setOwnerFocus("myReferences")
        this.props.getCategories()
        this.props.clearNewReference()
        this.setState({error: {title: null, link: null}, redirect: true})
        
    }else{
        // set local state error to say all urls must beging with https, must have titles that can not be blank
        this.setState({
            error: {
                title: title ? null: "Title can not be blank"
                , link: link.slice(0,5) === "https" ? null : (link ? "Urls must start with https" : "Link can not be blank")
            }
        })
        
    }
    
}


render(){
    return(
     this.state.redirect ?  
        <Redirect to="/select/references"/> 
        : 
        <div id="select-reference-create-input-container">
            {this.state.error.title ? <p id="select-reference-create-title-error">{this.state.error.title}</p> : null}  
            <input
                id= "select-reference-create-title" 
                type="text" 
                placeholder="Title of Reference"
                value={this.props.newReference.title} 
                onChange={(e) => this.props.setReferenceTitle(e.target.value)}
            />
            {this.state.error.link ? <p id="select-reference-create-link-error">{this.state.error.link}</p> : null} 
            <input 
                id= "select-reference-create-link" 
                type="url" 
                placeholder="Url Link to Reference"
                value={this.props.newReference.link} 
                onChange={(e) => this.props.setReferenceLink(e.target.value)}
            
            />

            <button 
                id="select-reference-create-button"
                onClick={this.handleCreateNewReference}
            >
                Create and Add your Reference
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