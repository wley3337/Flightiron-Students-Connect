import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../redux/actions'
import { Input, Menu } from 'semantic-ui-react'
import { Route } from 'react-router-dom'

import SelectionContainer from './SelectionContainer'

class NavBar extends React.Component {

    state ={
        activeItem: 'newNote'
    }

    componentDidMount(){
        
        if(localStorage.getItem('token')){
        this.props.getCategories()
        this.props.getUser()
        this.props.getAllPublicNotes()
        }
      
    }

   
    //sets the active collection based on menu item name. Uses store to populate the []
    handleItemClick = (argument) =>{
        this.props.setOwnerFocus(argument)
    }

    handleItemFocus= (item) =>{
        this.props.setFocusNote(item)
    }

    handleNewNoteClick = () =>{
        this.props.setFocusNote({note: {noteId: null, note_content: "", public_note: false, user_id : null}, categories: []})
        this.setState({
            activeItem: 'newNote',
        })
    }

    handleOnSearchChange = (e) =>{
        this.setState({
            searchTerm: e.target.value.toLowerCase()
        })
    }

    handleLogOut = (e) =>{    
        this.handleItemClick(e)
        this.props.logoutUser()
    }

   

    render(){
        return(
            this.props.user ?
                    <div id="select-container">
                    <Menu >
                        <Menu.Item
                            name='logout'
                            active={this.state.activeItem === 'logout'}
                            onClick={this.handleLogOut}
                        />  
                        <Menu.Item
                            name='newNote'
                            active={this.state.activeItem === 'newNote'}
                            onClick={this.handleNewNoteClick }
                            value="newNote"
                        />
                        <Menu.Item 
                            name='myNotes' 
                            active={this.state.activeItem === 'myNotes'}
                            onClick={() => this.handleItemClick("myNotes")} 
                        />
                        <Menu.Item
                            name='publicNotes'
                            active={this.state.activeItem === 'publicNotes'}
                            onClick={() => this.handleItemClick("publicNotes")}
                            value="publicNotes"
                        />
                   
                        {/* <Menu.Menu position='right'> */}
                            {/* <Menu.Item>
                                <Input 
                                icon='search' 
                                placeholder='Search...'
                                onChange={this.handleOnSearchChange}
                                />
                            </Menu.Item> */}
                        {/* </Menu.Menu> */}
                    </Menu>
                   
                  <Route exact path="/select" component={SelectionContainer}/>
                </div>
            :
            null
        )
    }
}

const mapStateToProps = (state) => {
    return {
        categories: state.categories,
        notes: state.notes,
        user: state.currentUser,
        publicNotes: state.publicNotes
     }
 }
    

export default connect(mapStateToProps, actions) (NavBar)