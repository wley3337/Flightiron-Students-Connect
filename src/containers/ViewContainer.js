import React from 'react'
import { Dropdown } from 'semantic-ui-react'
import { connect } from 'react-redux'
import * as actions from '../redux/actions'
import {Dimmer, Loader, Checkbox } from 'semantic-ui-react'
import { Redirect } from 'react-router'




class ViewContainer extends React.Component{

    componentDidMount(){
        
        if(localStorage.getItem('token')){
        this.props.getCategories()
        this.props.getUser()
        }
        // if(this.props.view){
        //     this.shiftFocus()
        // }
    }

    handleDelete = () =>{
        this.setState({
            content: "",
            newCategory:"",
            dropDownValueArray: []
        })   
    }

    handleSave = () =>{
        this.props.updateUser(this.props.view, this.props.user.id)
    }

    dipslayDropDown(){
    const optionsArray = this.props.categories.map(category => ({ key: category.id, text: category.name, value: category.id }))

    return <Dropdown 
                    placeholder='Categories' 
                    fluid 
                    multiple
                    search 
                    selection 
                    options= {optionsArray}
                    value={this.props.view.dropDownValueArray}
                    onChange={(e,value) => this.props.updateCategories(value.value)}
                />
    }



   

   render(){ 
        return(
         !localStorage.getItem('token') ? 
         
         <Redirect to="/"/>
        
         :   
        
                this.props.user  ? 
                     
                                <div>
                                    {this.props.categories.length > 0 ? this.dipslayDropDown() : null}
                                    <Checkbox toggle label="Public"  checked={this.props.view.public} onChange={() => this.props.updatePublic(this.props.view.public)}/>
                                    <input 
                                        type="text" 
                                        name="newCategory" 
                                        value={this.props.view.newCategory} 
                                        placeholder="New Category" 
                                        onChange={(e) => this.props.updateNewCategory(e.target.value)}
                                    />
                                    <button name="delete" onClick={this.handleDelete}>Delete</button>
                                    <button name="save"onClick={this.handleSave}>Save</button>
                                    <textarea name="content" value={this.props.view.content} onChange={(e) =>{this.props.updateNoteContent(e.target.value)}}/>
                                    
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


  
  
  