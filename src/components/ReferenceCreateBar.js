import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../redux/actions'
import {Dimmer, Loader, Menu, Dropdown } from 'semantic-ui-react'




class ReferenceCreateBar extends React.PureComponent{

    componentDidMount(){
        this.props.getCategories()
    }

   
    //this makes the category also available to add to a note if the user switches screens
    handleOnAdd = (e) =>{
        const newCat = { key: e.target.value, text: e.target.value, value: e.target.value }
        this.props.addCategoryLocal(newCat)
    }

   render(){ 
      
        return(
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
                            //this uses the prop to update categories for new user created categories from notes
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
       categories: state.categories,//needed and rendered
       user: state.currentUser, //only uses this to know if it can load categories. Is there a way around this?
       newReference: state.newReference//used to update categories dynamicly accross site.
    }
}

export default connect(mapStateToProps, actions)(ReferenceCreateBar)