import React from 'react'
import { Dropdown, Input } from 'semantic-ui-react'
import { connect } from 'react-redux'
import * as actions from '../redux/actions'

class SearchBar extends React.PureComponent {

    render (){
    return(
        <React.Fragment>
            {this.props.categories ?
                <span id="select-search-bar-dropdown-container">
                    <Dropdown 
                        id="select-search-bar-dropdown"
                        className="text-bg-stnd"
                        placeholder='Type to search categories' 
                        search 
                        selection 
                        
                        options= {this.props.categories}
                        value={this.props.searchCategoryId}
                        onChange={(e,value) => this.props.setSearchCategoryId(value.value)}
                    />
                    <button 
                        id="select-search-bar-button"
                        onClick={this.props.clearSearchCategoryId}
                    >Clear Category</button>
                </span>
            :   null}
        
            <Input
                id="select-search-bar-input"  
                icon='search'
                value={this.props.searchTerm} 
                placeholder='Search content' 
                onChange={(e)=> this.props.setSearchTerm(e.target.value)}
                />
        </React.Fragment>
    )
}
}

const mapStateToProps = (state) => {
   return {
       categories: state.categories, //displayes category list
       searchTerm: state.searchTerm, //sets input value
       searchCategoryId: state.searchCategoryId //sets category filter id
    }
}

export default connect(mapStateToProps, actions)(SearchBar)