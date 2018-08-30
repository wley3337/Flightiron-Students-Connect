import React from 'react'
import { Dropdown } from 'semantic-ui-react'
import { connect } from 'react-redux'
import * as actions from '../redux/actions'
import {Dimmer, Loader, Checkbox } from 'semantic-ui-react'
import { Redirect } from 'react-router'




class ViewContainer extends React.Component{
    state = {
        content: "",
        newCategory:"",
        dropDownValueArray: [],
        public: false,
        currentFocus: this.props.view || null
    }

    handlePublicToggle = () => {
        this.setState({
            public: !this.state.public
        })
    }

    handleOnChange= (e) =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleDropDownSelect = (e,value) => {
        this.setState({
            dropDownValueArray: value.value
        })
    }

    componentDidMount(){
        this.props.getCategories()
        if(localStorage.getItem('token')){
        this.props.getUser()
        }
    }

    handleDelete = () =>{
        this.setState({
            content: "",
            newCategory:"",
            dropDownValueArray: []
        })   
    }

    handleSave = () =>{
        const categoryArry = this.state.dropDownValueArray
        this.props.updateUser(this.state, categoryArry)
        this.dipslayDropDown()
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
                    value={this.state.dropDownValueArray}
                    onChange={(e,value) => this.handleDropDownSelect(e,value)}
                />
    }

    shiftFocus= () => {
        if(this.state.content){ this.handleSave() }
        if(this.state.focusNote){
            const focusNote = this.state.currentFocus
            this.setState({
                content: focusNote.content,
                dropDownValueArray: focusNote.categories? focusNote.categories : [],
                public: focusNote.public_note
            }) 
        }
    }

   

   render(){ 
        return(
         !localStorage.getItem('token') ? 
         
         <Redirect to="/"/>
        

         :   this.state.currentFocus ? 
                this.shiftFocus() 
            :
                this.props.user  ? 
                        
                        <div>
                                {this.props.categories.length > 0 ? this.dipslayDropDown() : null}
                                <Checkbox toggle label="Public" onChange={this.handlePublicToggle}/>
                                <input type="text" name="newCategory" value={this.state.newCategory} placeholder="New Category" onChange={this.handleOnChange}/>
                                <button name="delete" onClick={this.handleDelete}>Delete</button>
                                <button name="save"onClick={this.handleSave}>Save</button>
                                <textarea name="content" value={this.state.content} onChange={this.handleOnChange}/>
                                    
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


  
  
  