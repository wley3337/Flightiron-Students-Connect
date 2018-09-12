import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../redux/actions'
import {Dimmer, Loader, Dropdown } from 'semantic-ui-react'


class ReferenceSearchBar extends React.PureComponent{

   render(){ 
      
        return(
                this.props.user  ? 
                        <div id="select-reference-search-bar">
                                   {this.props.categories ?
                                        <span id="select-reference-search-bar-dropdown-container">
                                            <Dropdown 
                                                id="select-reference-search-bar-dropdown"
                                                className="text-bg-stnd"
                                                placeholder='Type to search categories' 
                                                search 
                                                selection 
                                                options= {this.props.categories}
                                                value={this.props.referenceSearchCategoryId}
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
       user: state.currentUser,
       referenceSearchCategoryId: state.referenceSearchCategoryId
    }
}

export default connect(mapStateToProps, actions)(ReferenceSearchBar)


  
  
