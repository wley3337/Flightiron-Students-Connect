import React from 'react'
import { Dropdown, Label } from 'semantic-ui-react'
import { connect } from 'react-redux'
import * as actions from '../redux/actions'
import {Dimmer, Loader, Checkbox } from 'semantic-ui-react'
import { Redirect } from 'react-router'


class ReferenceSearchBar extends React.Component{

 

   render(){ 
      
        return(
         !localStorage.getItem('token') ? 
         
         <Redirect to="/"/>
        
         :   
        
                this.props.user  ? 
                        <div id="select-reference">
                                   {this.props.categories ?
                                        <span id="select-reference-search-bar-dropdown-container">
                                            <Dropdown 
                                                id="select-reference-search-bar-dropdown"
                                                className="text-bg-stnd"
                                                placeholder='Type to search categories' 
                                                search 
                                                selection 
                                                options= {this.props.categories}
                                                value={this.props.searchCategoryId}
                                                onChange={(e,value) => this.props.setReferenceCategoryId(value.value)}
                                            />
                                            <button 
                                                id="select-reference-search-bar-button"
                                                onClick={this.props.clearReferenceCategoryId}
                                            >Clear Category</button>
                                        </span>
                                    :   null}     
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


  
  
