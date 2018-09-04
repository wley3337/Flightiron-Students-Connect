import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../redux/actions'
import ReactQuill from 'react-quill'

class SelectionContainer extends React.Component {
   

    handleItemFocus= (item) =>{
        this.props.setFocusNote(item)
    }

    handleFilterSelectionOnSearch = () =>{
        switch(this.props.ownerFocus){
            case "myNotes":
           return this.props.notes.filter(item => item.note.note_content.toLowerCase().includes(this.props.searchTerm))

            case "publicNotes":
            return this.props.publicNotes.filter(item => item.note.note_content.toLowerCase().includes(this.props.searchTerm))
    
            default:
           return []  

        }
    }

    render(){
        return(
            this.props.user ?
                    <div id="select-display-div">
                    
                        { this.handleFilterSelectionOnSearch().map(item => 
                                    <span onClick={()=> this.handleItemFocus(item)}key={item.note.id} >
                                    <ReactQuill 
                                        value={item.note.note_content.substring(0,50)}
                                        theme="bubble"
                                    /> 
                                    </span>   
                        )}
                                                                        

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
        searchTerm: state.searchTerm,
        ownerFocus: state.ownerFocus
     }
 }
    
export default connect(mapStateToProps, actions) (SelectionContainer)