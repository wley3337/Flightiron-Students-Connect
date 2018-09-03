import React from 'react'
import { Dropdown, Label } from 'semantic-ui-react'
import { connect } from 'react-redux'
import * as actions from '../redux/actions'
import {Dimmer, Loader, Checkbox } from 'semantic-ui-react'
import { Redirect } from 'react-router'




class ViewContainer extends React.Component{

    componentDidMount(){
        
        if(localStorage.getItem('token')){
        this.props.getCategories()
        this.props.getUser()
        this.props.getAllPublicNotes()
        }
      
    }

    // handleDelete = () =>{
    //     if(this.props.view.noteId && (this.props.view.noteUserId === this.props.user.id)){
    //       const noteId = this.props.view.noteId
    //       const noteInfo={ id: noteId }
    //       this.props.deleteNote({note: noteInfo})
    //     }else{
    //         this.props.setFocusNote({note: {noteId: null, note_content: "", public_note: false, user_id : null}, categories: []})
    //     }
       
    // }

    // handleSave = () =>{
    //     this.props.updateUser(this.props.view, this.props.user.id)
    // }


   render(){ 
      const optionsArray = this.props.categories.map(category => ({ key: category.id, text: category.name, value: category.id }))
        return(
         !localStorage.getItem('token') ? 
         
         <Redirect to="/"/>
        
         :   
        
                this.props.user  ? 
                     
                                <div id="view-container">
                                    {optionsArray ?
                                        <Dropdown 
                                            className="text-bg-stnd"
                                            placeholder='Categories' 
                                            fluid 
                                            multiple
                                            search 
                                            selection 
                                            options= {optionsArray}
                                            value={this.props.view.dropDownValueArray}
                                            onChange={(e,value) => this.props.updateCategories(value.value)}
                                        />
                                        : null}
                                    <div id="view-nav-bar">
                                
                                        <input 
                                            id="view-new-category"
                                            className="text-bg-stnd"
                                            type="text" 
                                            name="newCategory" 
                                            value={this.props.view.newCategory} 
                                            placeholder="New Category" 
                                            onChange={(e) => this.props.updateNewCategory(e.target.value)}
                                        />
                                      
                                    </div>
                                    <textarea 
                                    className="text-bg-stnd"
                                    name="content" 
                                    value={this.props.view.content} onChange={(e) =>{this.props.updateNoteContent(e.target.value)}}/>
                                    
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
       view: state.view
    }
}

export default connect(mapStateToProps, actions)(ViewContainer)


  
  
  