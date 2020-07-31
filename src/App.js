import React, { Component } from 'react';

// router Dom
import {Route,Switch, withRouter} from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';

//route constants
import * as ROUTES from './Constants/routes';

//component imports
import HomeContainer from './components/HomeContainer';
import LogReg from './components/LogReg'
import Dashboard from './components/Dashboard'

class App extends Component
{

  state = {
    currentUser : {},
    returning:false
  }

  setUser = (user) =>{
    this.setState({currentUser : user, ...this.state.returning })
  }
  setStatus = (s) =>{
    this.setState({ returning : s })
    
    
  }

  render()
  {
    return(
      <div className="App">
      <Router>
        <Switch>
            <Route exact path = {ROUTES.HOME} render ={(props)=><HomeContainer setStatus = {this.setStatus} {...props}/>}/>
            <Route exact path = {ROUTES.REGISTER} render ={(props)=> <LogReg  setUser = {this.setUser} currentUser = {this.state.currentUser} {...props}/>}/>
            <Route exact path = {ROUTES.LOGIN} render ={(props)=> <LogReg  setUser = {this.setUser} currentUser = {this.state.currentUser} returning =  {this.state.returning} {...props}/> }/>
            <Route exact path = {`${ROUTES.DASHBOARD}`} render = {(props)=> <Dashboard currentUser = {this.state.currentUser} {...props}/>}/>
         </Switch>
      </Router>
      </div>
    )
    
  }
}

export default App;
