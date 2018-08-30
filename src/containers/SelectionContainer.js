import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../redux/actions'

class SelectionContainer extends React.Component {



    render(){
        return(
            this.props.user ?
            <div>
                SelectionContainer
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
        user: state.currentUser
     }
 }
    

export default connect(mapStateToProps, actions) (SelectionContainer)