import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../redux/actions'
import ReactQuill from 'react-quill'
import { Link } from 'react-router-dom'

import SearchBar from '../components/SearchBar'

class SelectionContainer extends React.PureComponent {

    componentDidMount(){
        this.props.getAllPublicNotes(this.props.noteOffsetId)
    }

    handleItemFocus= (item) =>{
        this.props.setFocusNote(item)  
    }

    handleFilterSelectionOnSearch = () =>{
        switch(this.props.ownerFocus){
            case "myNotes":
           return this.filterForCatId(this.props.notes).filter(item => item.note.note_content.toLowerCase().includes(this.props.searchTerm.toLowerCase()))

            case "publicNotes":
            return this.filterForCatId(this.props.publicNotes).filter(item => item.note.note_content.toLowerCase().includes(this.props.searchTerm.toLowerCase()))
    
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
                                <span id="select-display-note-links-span" key={item.note.id}>
                                    <Link 
                                    className="select-display-note-links"
                                    onClick={()=> this.handleItemFocus(item)}
                                    to="/select/my-page">
                                    <ReactQuill 
                                        value={item.note.note_content.substring(0,60)}
                                        theme="bubble"
                                    /> 
                                    </Link> 
                                </span>  
                        )}
                    </div>

                    {this.props.ownerFocus !== "myNotes" ? 
                        <div className="last-next-button-container">
                            {this.props.publicNoteHistory.length > 0 ? 
                                <button
                                    onClick={()=> this.props.lastNotes(this.props.publicNoteHistory)}
                                    className="last"
                                >Last 50</button> 
                            : null}
                            {this.props.moreNotes ? 
                                <button 
                                    className="next"
                                    onClick={()=> this.props.nextNotes(this.props.noteOffsetId,this.props.publicNotes)}
                                >Next 50</button> 
                            : null}
                        </div>
                    : 
                        null
                    }

                </div>
            :
            null
        )
    }
}

const mapStateToProps = (state) => {
    return {
        noteOffsetId: state.noteOffsetId,
        notes: state.notes,
        user: state.currentUser,
        publicNotes: state.publicNotes,
        searchTerm: state.searchTerm,
        ownerFocus: state.ownerFocus,
        searchCategoryId: state.searchCategoryId,
        moreNotes: state.moreNotes,
        publicNoteHistory: state.publicNoteHistory
     }
 }
    
export default connect(mapStateToProps, actions) (SelectionContainer)