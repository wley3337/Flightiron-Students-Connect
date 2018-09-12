import React from 'react'
import { Dropdown } from 'semantic-ui-react'
import { connect } from 'react-redux'
import * as actions from '../redux/actions'
import {Dimmer, Loader} from 'semantic-ui-react'
import ReactQuill from 'react-quill';

import ViewNavBar from './ViewNavBar'



class ViewContainer extends React.PureComponent{

    state ={
        text: "",
        addDropDown: []
    }

    componentDidMount(){
        this.props.getCategories()
        this.props.getAllPublicNotes(this.props.noteOffsetId)
    }

    handleOnAdd = (e) =>{
        const newCat = { key: e.target.value, text: e.target.value, value: e.target.value }
        this.props.addCategoryLocal(newCat)
    }

   render(){ 
        return(
                this.props.user  ? 
                        <div id="view-container">
                            <ViewNavBar/>
                                <span id="view-categories">
                                    {this.props.categories ?
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
                                            value={this.props.view.dropDownValueArray}
                                            onChange={(e,value) => this.props.updateCategories(value.value)}
                                        />
                                        : null}           
                                </span>
                                <div id="view-note-area">
                                    <ReactQuill 
                                        id="view-quill-area"
                                        theme="snow" 
                                        value={this.props.view.content} 
                                        onChange={(value) =>{this.props.updateNoteContent(value)}} 
                                    />
                                </div>
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

export default connect(mapStateToProps, actions)(ViewContainer)


  
  
  