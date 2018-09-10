import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../redux/actions'
import { Input, Menu, Dropdown, MenuItem } from 'semantic-ui-react'
import { Route, Link} from 'react-router-dom'

import SelectionContainer from './SelectionContainer'

class NavBar extends React.Component {
   
   

    componentDidMount(){
        
        if(localStorage.getItem('token')){
        this.props.getCategories()
        this.props.getUser()
        this.props.getAllPublicNotes(this.props.noteOffsetId)
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
        e.persist()   
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
                       
                        <Dropdown text="Notes" pointing className='link item'>
                         <Dropdown.Menu id="navbar-dropdown-menu">
                            <Dropdown.Item
                                name='newNote'
                                text="New Note"
                                className="navbar-dropdown-text"
                                active={this.props.ownerFocus === 'newNote'}
                                onClick={this.handleNewNoteClick }
                                value="newNote"
                                as={ Link }
                                to="/select/my-page"
                            />
                            <Dropdown.Item 
                                name='myNotes' 
                                text="My Notes"
                                className="navbar-dropdown-text"
                                active={this.props.ownerFocus === 'myNotes'}
                                onClick={() => this.handleItemClick("myNotes")}
                                value="newNotes" 
                                as={ Link }
                                to="/select/notes"
                            />
                            <Dropdown.Item
                                name='publicNotes'
                                text="Public Notes"
                                className="navbar-dropdown-text"
                                active={this.props.ownerFocus === 'publicNotes'}
                                onClick={() => this.handleItemClick("publicNotes")}
                                value="publicNotes"
                                as={ Link }
                                to="/select/notes"
                            />
                            </Dropdown.Menu>
                        </Dropdown>

                        <Dropdown text="References" pointing className='link item'>
                         <Dropdown.Menu id="navbar-dropdown-menu-references">
                            <Dropdown.Item
                                name='newReference'
                                text="New Reference"
                                className="navbar-dropdown-text"
                                active={this.props.ownerFocus === 'newReference'}
                                onClick={this.handleNewNoteClick }
                                value="newReference"
                                as={ Link }
                                to="/select/references/new"
                            />
                            <Dropdown.Item 
                                name='myReference' 
                                text="My References"
                                className="navbar-dropdown-text"
                                active={this.props.ownerFocus === 'myReference'}
                                onClick={() => this.handleItemClick("myReference")}
                                value="myReference" 
                                as={ Link }
                                to="/select/references"
                            />
                            <Dropdown.Item
                                name='references'
                                text="References"
                                className="navbar-dropdown-text"
                                active={this.props.ownerFocus === 'references'}
                                onClick={() => this.handleItemClick("references")}
                                value="references"
                                as={ Link }
                                to="/select/references"
                            />
                            </Dropdown.Menu>
                        </Dropdown>



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
        ownerFocus: state.ownerFocus,
        noteOffsetId: state.noteOffsetId
     }
 }
    

export default connect(mapStateToProps, actions) (NavBar)