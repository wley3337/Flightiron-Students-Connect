import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../redux/actions'
import { Input, Menu, Segment } from 'semantic-ui-react'

class SelectionContainer extends React.Component {
    state ={
        activeItem: 'myNotes',
        activeCollection: []
    }

    //sets the active collection based on menu item name. Uses store to populate the []
    handleItemClick = (argument) =>{
        let activeCollection;
         switch(argument){
            case "myNotes":
             activeCollection = this.props.notes
             break
            case "publicNotes":
              activeCollection= []
              break
            default:
            null   
        }
        this.setState({
            activeItem: argument,
            activeCollection: activeCollection
        })
    }

    handleItemFocus= (item) =>{
        console.log(item)
        this.props.setFocusNote(item)
    }


    render(){
        return(
            this.props.user ?
                    <div>
                    <Menu pointing>
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
                   
                    {/* <Menu.Menu position='right'>
                        <Menu.Item>
                        <Input icon='search' placeholder='Search...' />
                        </Menu.Item>
                    </Menu.Menu> */}
                    </Menu>
            
                    <Segment>
                            {this.state.activeCollection.map(item => <p key={item.note.id}onClick={()=> this.handleItemFocus(item)}>
                                                                        
                                                                        {item.note.note_content.substring(0,50)}       
                                                                     </p> )}
                    </Segment>
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