import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../redux/actions'
import ReactQuill from 'react-quill'
import { Link } from 'react-router-dom'

import SearchBar from '../components/SearchBar'

class SelectionContainer extends React.Component {
    componentDidMount(){
        
        if(localStorage.getItem('token')){
        this.props.getAllPublicNotes(this.props.noteOffsetId)
        }
      
    }

    handleItemFocus= (item) =>{
        this.props.setFocusNote(item)
       
    }

    handleFilterSelectionOnSearch = () =>{
        switch(this.props.ownerFocus){
            case "myNotes":
           return this.filterForCatId(this.props.notes).filter(item => item.note.note_content.toLowerCase().includes(this.props.searchTerm))

            case "publicNotes":
            return this.filterForCatId(this.props.publicNotes).filter(item => item.note.note_content.toLowerCase().includes(this.props.searchTerm))
    
            default:
           return []  

        }
    }

    filterForCatId =(notesArray)=>{
    return this.props.searchCategoryId ?  
        notesArray.filter(item =>{ return item.categories.find(cat => cat.id === this.props.searchCategoryId)})
     :  notesArray;
    }


    render(){
        return(
            this.props.user ?
                <div id="selection-container">
                    <div
                        id="select-search-bar"
                    >
                        <SearchBar/>
                    </div>
                    
                    
                    <div 
                    id="select-display-div"
                    
                    >
                    
                        { this.handleFilterSelectionOnSearch().map(item => 
                                <span id="select-display-note-links-span">
                                    <Link 
                                    className="select-display-note-links"
                                    onClick={()=> this.handleItemFocus(item)}key={item.note.id}
                                     to="/select/my-page">
                                    <ReactQuill 
                                        value={item.note.note_content.substring(0,60)}
                                        theme="bubble"
                                    /> 
                                    </Link> 
                                </span>  
                        )}
                                                                        

                    </div>
                </div>
            :
            null
        )
    }
}

const mapStateToProps = (state) => {
    return {
        noteOffsetId: state.noteOffsetId,
        categories: state.categories,
        notes: state.notes,
        user: state.currentUser,
        publicNotes: state.publicNotes,
        searchTerm: state.searchTerm,
        ownerFocus: state.ownerFocus,
        searchCategoryId: state.searchCategoryId
     }
 }
    
export default connect(mapStateToProps, actions) (SelectionContainer)