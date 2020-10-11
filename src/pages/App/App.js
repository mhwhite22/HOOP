import React, {Component} from 'react';
import './App.css';
import {Route, Nav, NavLink, Switch, Redirect} from 'react-router-dom';
import HomePage from '../../pages/HomePage/HomePage';
import SignupPage from '../../pages/SignupPage/SignupPage';
import LoginPage from '../../pages/LoginPage/LoginPage';
// import DayDetailPage from '../../pages/DayDetailPage/DayDetailPage';
// import WeekDetailPage from '../../pages/WeekDetailPage/WeekDetailPage';
import userService from '../../utils/userService';

class App extends Component {
  state = {
    days: []
  }

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  }

  handleSignupOrLogin = () => {
    this.setState({ user: userService.getUser() });
  }

  render() {
    return(
      <div className="App">
        <header className="App-header">
        </header>
        <Switch>
          <Route exact path='/' render={() =>
          <HomePage  
          />
          }/>
          <Route exact path='/signup' render={( {history }) =>
          <SignupPage 
          history={history}
            />
          }/> 
          <Route exact path='/login' render={( {history }) =>
          <LoginPage
          history={history}
            />
          }/> 
        </Switch>
      </div>
    )
  }
}

export default App;
