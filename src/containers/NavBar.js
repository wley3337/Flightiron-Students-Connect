import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../redux/actions'
import { Input, Menu } from 'semantic-ui-react'
import { Route, Link} from 'react-router-dom'

import SelectionContainer from './SelectionContainer'

class NavBar extends React.Component {

   

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
        this.handleItemClick('newNote')
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
                    <div id="navbar-container">
                    <Menu >
                        <Menu.Item
                            name='logout'
                            active={this.props.ownerFocus === 'logout'}
                            onClick={this.handleLogOut}
                            as={ Link }
                            to="/"
                        />  
                        <Menu.Item
                            name='newNote'
                            active={this.props.ownerFocus === 'newNote'}
                            onClick={this.handleNewNoteClick }
                            value="newNote"
                            as={ Link }
                            to="/select/my-page"
                        />
                        <Menu.Item 
                            name='myNotes' 
                            active={this.props.ownerFocus === 'myNotes'}
                            onClick={() => this.handleItemClick("myNotes")} 
                            as={ Link }
                            to="/select/public-notes"
                        />
                        <Menu.Item
                            name='publicNotes'
                            active={this.props.ownerFocus === 'publicNotes'}
                            onClick={() => this.handleItemClick("publicNotes")}
                            value="publicNotes"
                            as={ Link }
                            to="/select/public-notes"
                        />
                    </Menu>
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
        publicNotes: state.publicNotes,
        ownerFocus: state.ownerFocus
     }
 }
    

export default connect(mapStateToProps, actions) (NavBar)