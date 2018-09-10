import React from 'react'
import { Dropdown, Label } from 'semantic-ui-react'
import { connect } from 'react-redux'
import * as actions from '../redux/actions'
import {Dimmer, Loader, Menu } from 'semantic-ui-react'
import { Redirect } from 'react-router'
import ReactQuill from 'react-quill';
import ViewNavBar from '../containers/ViewNavBar'



class ReferenceCreateBar extends React.Component{

    componentDidMount(){
        
        if(localStorage.getItem('token')){
        this.props.getUser()
        this.props.getCategories()
        }
      
    }

   
    //this makes the category also available to add to a note if the user switches screens
    handleOnAdd = (e) =>{
        const newCat = { key: e.target.value, text: e.target.value, value: e.target.value }
        this.props.addCategoryLocal(newCat)
    }

   render(){ 
      
        return(
         !localStorage.getItem('token') ? 
         
             <Redirect to="/"/>
        
         :   
        
                this.props.user  ? 
                        
                                    this.props.categories ?
                                    <Menu id="select-reference-create">
                                        <Dropdown 
                                            className="text-bg-stnd"
                                            placeholder='Type to search categories or to add a new one' 
                                            fluid 
                                            multiple
                                            search 
                                            selection 
                                            additionLabel="Press 'enter' to add:  "
                                            // additionLabel
                                            allowAdditions
                                            onAddItem={this.handleOnAdd}
                                            options= {this.props.categories}
                                            value={this.props.newReference.dropDownValueArray}
                                            onChange={(e,value) => this.props.updateReferenceCategories(value.value)}
                                        />
                                        
                                        <Menu.Item
                                            name='clearNewReference'
                                            onClick={this.props.clearNewReference}
                                        >
                                          Clear New Reference
                                        </Menu.Item>
                                        </Menu>
                                        : null        
                           
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
       noteOffsetId: state.noteOffsetId,
       newReference: state.newReference
    }
}

export default connect(mapStateToProps, actions)(ReferenceCreateBar)