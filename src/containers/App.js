import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import MediaQuery from 'react-responsive'

import HomeScreenButtons from '../components/HomeScreenButtons';
import LoginForm from '../components/LoginForm'
import CreateUserForm from '../components/CreateUserForm'
import TabletHandHeldView from './TabletHandHeldView'
import DesktopView from './DesktopView'

class App extends Component {
 

  render() {
    return (
      <div className="compass">

          <Route exact path="/" render={() => <HomeScreenButtons />}/>
          <Route exact path="/login" component={  LoginForm } />
          <Route exact path="/create-user" component={  CreateUserForm } />
          
          <MediaQuery maxWidth={1224}>
            <TabletHandHeldView />
          </MediaQuery>

          <MediaQuery minWidth={1225}>  
            <DesktopView />
          </MediaQuery>

      </div>
    );
  }
}



export default App;
