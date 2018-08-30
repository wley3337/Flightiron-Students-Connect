import React from 'react'
import { Menu } from 'semantic-ui-react'
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

    render ()
        {const { activeItem } = this.state
    return(
        <Menu>
            <Menu.Item
            name='logout'
            active={activeItem === 'logout'}
            onClick={this.handleLogOut}
            >
            Logout
            </Menu.Item>

        

            {/* <Menu.Item
            name='upcomingEvents'
            active={activeItem === 'upcomingEvents'}
            onClick={this.handleItemClick}
            >
            Upcoming Events
            </Menu.Item> */}
      </Menu>
    )
}
}

export default connect(null, actions)(NavBar)