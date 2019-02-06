import { Route, Redirect} from 'react-router-dom'
import React, { Component } from 'react';
// import { BrowserRouter as Router } from 'react-router-dom'

import DataManager from './modules/DataManager'
import Login from './components/login/LoginForm'
import HomePage from './components/home/HomePage'
import CollectionsList from './components/Collections/CollectionsList'
import NavBar from './components/nav/NavBar'
export default class ApplicationViews extends Component {

  // Check if credentials are in local storage
  isAuthenticated = () => localStorage.getItem("credentials") !== null

  state = {
    users: [],
    usas: [],
    quarters: [],
    collections: [],
    matchlist: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55],
  }

  getAllUsers = user => DataManager.getAll("users", user)
    .then(users => this.setState({
      users: users
    }))

    addQ = quarter => DataManager.add("quarter", quarter)
    .then(() => DataManager.getAll("quarters"))
    .then(quarters => this.setState({
      quarters: quarters
    }))

  componentDidMount() {

    const newState = {}

    DataManager.getAll("users")
      .then(allUsers => {
        newState.users = allUsers
      })
      .then(()=>DataManager.getAll("usas"))
      .then(usas => newState.usas = usas)
      .then(()=>DataManager.getAll("quarters"))
      .then(quarter => newState.quarters = quarter)
      .then(()=>DataManager.getAll("collections"))
      .then(collections => newState.collections = collections)

      .then(() => this.setState(newState))
  };

  render() {
    return (
      <React.Fragment>
        {/* <Route exact path="/"
        component={HomePage} /> */}

        <Route
        exact path="/" render={props => {
          return <React.Fragment>
            <NavBar />
            <HomePage />

          </React.Fragment>
        }}
        />



        <Route exact path="/login" component={Login} />
        {/* <Route exact path="/register" component={ComingSoon} /> */}
        {/* <Route exact path="/learn" component={ComingSoon} /> */}
        {/* <Route exact path="/home" component={Home} /> */}
        <Route exact path="/collections" render={props => {
            return <CollectionsList
              {...props}
              collections={this.state.collections}
              // messages={this.state.messages}
              // users={this.state.users}
              // deleteMessage={this.deleteMessage}
              // addMessage={this.addMessage}

              // stickMessagesOnDom={this.stickMessagesOnDom}

              /> }}
        />

      </React.Fragment >
    )

}
}