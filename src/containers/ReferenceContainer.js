import React from 'react'

import ReferenceSearchBar from '../components/ReferenceSearchBar'
import { Dropdown, Label } from 'semantic-ui-react'
import { connect } from 'react-redux'
import * as actions from '../redux/actions'
import {Dimmer, Loader, Checkbox } from 'semantic-ui-react'
import { Redirect } from 'react-router'

// css styling : select-reference, select-reference-search-bar


class ReferenceContainer extends React.Component{

    componentDidMount(){
        
        if(localStorage.getItem('token')){
        this.props.getUser()
        this.props.getCategories()
        this.props.getReferences(this.props.referenceOffsetId)
        }
      
    }

    handleFilterSelectionOnSearch = () =>{
        switch(this.props.ownerFocus){
            case "myReference":
            return this.filterForCatId(this.props.references)
        //    this is for a search term possiblity
        //    .filter(item => item.reference.title.toLowerCase().includes(this.props.searchTerm))

            case "references":
            return this.filterForCatId(this.props.publicReferences)
            //    this is for a search term possiblity
            // .filter(item => item.reference.title.toLowerCase().includes(this.props.searchTerm))
    
            default:
           return []  

        }
    }

    filterForCatId =(referenceArray)=>{
    return this.props.referenceSearchCategoryId ?  
        referenceArray.filter(item =>{ return item.categories.find(cat => cat.id === this.props.referenceSearchCategoryId)})
     :  referenceArray;
    }

    checkForSavedReference=(id) =>{
        const refArray =[]
        for(const object of this.props.references){
            object.reference.id === id ? refArray.push(id) : null
        }
        return refArray.length > 0 ? true : false
    }

    handleReferenceAlreadyExists = () =>{
        
        setTimeout(this.props.clearExistingReference, 3000)
        return <p id ="select-reference-container-already-exists">Reference already exists and has been added to your saved references as: {this.props.existingReference[0].title} </p>
    }
render(){
    return(
        <div id="select-reference-container">
          <ReferenceSearchBar />
            
         <div id="select-reference-links">
         {this.props.existingReference.length > 0 ? this.handleReferenceAlreadyExists() : null}
            { this.handleFilterSelectionOnSearch().map(item => 
                <div key={item.reference.id}>
                    <a    
                        href={item.reference.link}
                        target="_blank"
                    >
                        {item.reference.title}
                    </a> 
                   {this.props.ownerFocus === 'myReference' ? 
                        <button onClick={() => this.props.removeReferenceToUser(item.reference.id)}>Remove</button> 
                    :
                        this.checkForSavedReference(item.reference.id) ? 
                         null 
                        :
                         <button onClick={() => this.props.saveReferenceToUser(item.reference.id)}>Save</button>
                    }

                   
                </div> 
            )}
         </div>
       </div>
    )
}

}

const mapPropsToState = (state) =>{
    return{
        ownerFocus: state.ownerFocus,
        references: state.references,
        referenceOffsetId: state.referenceOffsetId,
        publicReferences: state.publicReferences,
        referenceSearchCategoryId: state.referenceSearchCategoryId,
        existingReference: state.existingReference
    }
}



export default connect(mapPropsToState, actions)(ReferenceContainer)