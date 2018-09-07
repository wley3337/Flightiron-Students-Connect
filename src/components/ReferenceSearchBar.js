import React from 'react'
import { Dropdown, Label } from 'semantic-ui-react'
import { connect } from 'react-redux'
import * as actions from '../redux/actions'
import {Dimmer, Loader, Checkbox } from 'semantic-ui-react'
import { Redirect } from 'react-router'
import ReactQuill from 'react-quill';
import ViewNavBar from '../containers/ViewNavBar'



class ReferenceSearchBar extends React.Component{

    state ={
        text: "",
    }

    handleOnChange = (value) =>{
    
        this.setState({
            text: value
        })
    }

    componentDidMount(){
        
        if(localStorage.getItem('token')){
        this.props.getCategories()
        this.props.getUser()
        this.props.getAllPublicNotes(this.props.noteOffsetId)
        }
      
    }

   

    handleOnAdd = (e) =>{
        const newCat = { key: e.target.value, text: e.target.value, value: e.target.value }
        this.props.addCategoryLocal(newCat)
    }

   render(){ 
    //   const optionsArray = this.props.categories.map(category => ({ key: category.id, text: category.name, value: category.id }))

      
        return(
         !localStorage.getItem('token') ? 
         
         <Redirect to="/"/>
        
         :   
        
                this.props.user  ? 
                        <div id="select-reference">
                                    {this.props.categories ?
                                        <Dropdown 
                                            className="text-bg-stnd"
                                            placeholder='Type to search categories or to add a new one' 
                                            fluid 
                                            multiple
                                            search 
                                            selection 
                                            
                                            // additionLabel
                                            allowAdditions
                                            onAddItem={this.handleOnAdd}
                                            options= {this.props.categories}
                                            value={this.props.view.dropDownValueArray}
                                            onChange={(e,value) => this.props.updateCategories(value.value)}
                                        />
                                        : null}        
                        </div>
                        
                    :   
                        <Dimmer active>
                            <Loader size='small'>Loading</Loader>
                        </Dimmer>
        
        )}
    }

const mapStateToProps = (state) => {
   return {
       categories: state.categories,
       notes: state.notes,
       user: state.currentUser,
       view: state.view,
       noteOffsetId: state.noteOffsetId
    }
}

export default connect(mapStateToProps, actions)(ReferenceSearchBar)


  
  
  