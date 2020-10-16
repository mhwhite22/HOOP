import React, {Component} from 'react';
import './App.css';
import {Route, Nav, NavLink, Switch, Redirect} from 'react-router-dom';
import HomePage from '../../pages/HomePage/HomePage';
import SignupPage from '../../pages/SignupPage/SignupPage';
import LoginPage from '../../pages/LoginPage/LoginPage';
import UserPage from '../../pages/UserPage/UserPage';
import DayDetailPage from '../../pages/DayDetailPage/DayDetailPage';
import WeekDetailPage from '../../pages/WeekDetailPage/WeekDetailPage';
import DataFormPage from '../../pages/DataFormPage/DataFormPage';
import userService from '../../utils/userService';
import * as daysAPI from '../../services/days-api';


class App extends Component {
  constructor() {
    super();
    this.state = {
    days: [],
    user: userService.getUser(),
    date: this.getCurrentDate()
  };
  }

  handleAddDay = async newDayData => {
    const newDay = await daysAPI.create(newDayData);
    this.setState(state => ({
      days: [...state.days, newDay]
    }),
    () => this.props.history.push('/user'));
  }

  handleDeleteDay = async id =>{}


  getCurrentDate() {
    const today = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return today.toLocaleDateString(undefined, options);
  }

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  }

  handleSignupOrLogin = () => {
    this.setState({ user: userService.getUser() });
  }

  /* LifeCycle Methods */
  async componentDidMount() {
    const days = await daysAPI.getAll();
    this.setState({days});
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
          handleSignupOrLogin={this.handleSignupOrLogin}
            />
          }/> 
          <Route exact path='/login' render={( {history }) =>
          <LoginPage
          history={history}
          handleSignupOrLogin={this.handleSignupOrLogin}
            />
          }/> 
          <Route exact path='/user' render={( {history }) =>
          userService.getUser() ?
          <UserPage
          history={history}
          name={this.state.user.name}
          date={this.state.date}
          days={this.state.days}
          currentDate={this.getCurrentDate}
          handleLogout={this.handleLogout}
            />
            :
            <Redirect to='/' />
          }/> 
          <Route exact path='/day' render={( {history} ) =>
          userService.getUser() ?
          <DayDetailPage 
          history={history}
          name={this.state.user.name}
          date={this.state.date}
          days={this.state.days}
          />
          :
          <Redirect to='/' />
          }/>
          <Route exact path='/week' render={( {history} ) =>
          userService.getUser() ?
          <WeekDetailPage 
          date={this.state.date}
          days={this.state.days}
          />
          :
          <Redirect to='/'/>
          }/>
          <Route exact path='/dataform' render={( {history} )=>
          userService.getUser() ?
          <DataFormPage 
          handleAddDay={this.handleAddDay}
          />
          :
          <Redirect to='/' />
          }/>
        </Switch>
      </div>
    )
  }
}

export default App;
