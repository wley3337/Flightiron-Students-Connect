import React from 'react'
import { Menu, Label, Checkbox } from 'semantic-ui-react'
import { connect } from 'react-redux'
import * as actions from '../redux/actions'

class NavBar extends React.Component {
    state ={
        activeItem: ""
    }

    handleItemClick = (e) =>{
        this.setState({
            activeItem: e.target.name
        })
    }
    
    handleLogOut = (e) =>{
        this.handleItemClick(e)
        this.props.logoutUser()
        this.props.history.push('/')

    }

    handleDelete = () =>{
        if(this.props.view.noteId && (this.props.view.noteUserId === this.props.user.id)){
          const noteId = this.props.view.noteId
          const noteInfo={ id: noteId }
          this.props.deleteNote({note: noteInfo})
          this.props.setFocusNote({note: {noteId: null, note_content: "", public_note: false, user_id : null}, categories: []})
        }else{
            this.props.setFocusNote({note: {noteId: null, note_content: "", public_note: false, user_id : null}, categories: []})
        }
       
    }

    handleSave = () =>{
        this.props.updateUser(this.props.view, this.props.user.id)
    }

    render ()
        {const { activeItem } = this.state
    return(
        <div id ="top-nav-bar">
            <Menu className="text-bg-stnd">
                <Menu.Item
                name='logout'
                active={activeItem === 'logout'}
                onClick={this.handleLogOut}
                >
                Logout
                </Menu.Item>
                 <Menu.Item>
                <Checkbox 
                
                label="Public"
                id="view-public"
                toggle
                checked={this.props.view.public} onChange={() => this.props.updatePublic(this.props.view.public)}
                />
                </Menu.Item> 
                                  
             <Menu.Item
                name='delete'
                active={activeItem === 'delete'}
                onClick={this.handleDelete}
                >
                Delete
                </Menu.Item>                   
                <Menu.Item
                name='save'
                active={activeItem === 'upcomingEvents'}
                onClick={this.handleSave}
                >
                Save
                </Menu.Item>


                {/* <Menu.Item
                name='upcomingEvents'
                active={activeItem === 'upcomingEvents'}
                onClick={this.handleItemClick}
                >
                Upcoming Events
                </Menu.Item> */}
        </Menu>
      </div>
    )
}
}

const mapStateToProps = (state) => {
   return {
       categories: state.categories,
       notes: state.notes,
       user: state.currentUser,
       view: state.view
    }
}

export default connect(mapStateToProps, actions)(NavBar)