import React from 'react'
import { Menu, Label, Checkbox } from 'semantic-ui-react'
import { connect } from 'react-redux'
import * as actions from '../redux/actions'
import { Link} from 'react-router-dom'

class ViewNavBar extends React.Component {
    state ={
        activeItem: ""
    }

    handleItemClick = (e) =>{
        this.setState({
            activeItem: e.target.name
        })
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
        this.props.setOwnerFocus('myNotes')
        this.props.updateUser(this.props.view, this.props.user.id)
    }

    render ()
        {const { activeItem } = this.state
        
    return(
        <div id ="view-nav-bar">
            <Menu className="text-bg-stnd">
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
                    {this.props.view.noteUserId === this.props.user.id || !this.props.view.noteUserId ? 
                        <Menu.Item
                            name='save'
                            active={activeItem === 'save'}
                            onClick={this.handleSave}
                            as={Link}
                            to="/select/notes"
                        >
                            Save
                        </Menu.Item>
                    :
                        <Menu.Item
                            name='save'
                            active={activeItem === 'save'}
                            onClick={this.handleSave}
                            as={Link}
                            to="/select/notes"
                        >
                            Save a copy of note
                        </Menu.Item>
                    }
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

export default connect(mapStateToProps, actions)(ViewNavBar)