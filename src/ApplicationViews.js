import { Route, Redirect} from 'react-router-dom'
import React, { Component } from 'react';

import DataManager from './modules/DataManager'
import Login from './components/login/LoginForm'
import LandingPage from './components/landing/LandingPage'
// import CollectionsList from './components/Collections/CollectionsList'
import Dashboard from './components/Collections/Dashboard'
import HasCard from './components/Collections/Has/HasCard'
import NeedsCard from './components/Collections/Needs/NeedsCard'
// import NavBar from './components/nav/NavBar'
export default class ApplicationViews extends Component {

  // Check if credentials are in local storage
  isAuthenticated = () => localStorage.getItem("credentials") !== null

  state = {
    users: [],
    usas: [],
    quarters: [],
    collections: [],
    TobysQuarters: [],
    NatesQuarters: [],
    AndrewsQuarters: [],
    LaneysQuarters: [],
    MaryMacsQuarters: [],
    MollysQuarters: [],
    matchlist: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55],
  }

  getAllUsers = user => DataManager.getAll("users", user)
    .then(users => this.setState({
      users: users
    }))

    addQ = quarter => DataManager.add("quarters", quarter)
    .then(() => DataManager.getAll("quarters"))
    .then(quarters => this.setState({
      quarters: quarters
    }))

    // getAndrewsCollection = () => DataManager.getASpecificCollection(3)
    // .then(collection => this.setState({
    //   collections: collection
    // }))

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
      .then(()=>DataManager.getASpecificCollection(1))
      .then(collections => newState.TobysQuarters = collections)
      .then(()=>DataManager.getASpecificCollection(2))
      .then(collections => newState.NatesQuarters = collections)
      .then(()=>DataManager.getASpecificCollection(3))
      .then(collections => newState.AndrewsQuarters = collections)
      .then(()=>DataManager.getASpecificCollection(4))
      .then(collections => newState.LaneysQuarters = collections)
      .then(()=>DataManager.getASpecificCollection(5))
      .then(collections => newState.MaryMacsQuarters = collections)
      .then(()=>DataManager.getASpecificCollection(6))
      .then(collections => newState.MollysQuarters = collections)

      .then(() => this.setState(newState))
  };

  render() {
    return (
      <React.Fragment>

        <Route exact path="/" render={props => {
          return <React.Fragment>
            <LandingPage />
          </React.Fragment>
        }}
        />



        <Route exact path="/login" component={Login} />
        {/* <Route exact path="/register" component={ComingSoon} /> */}
        {/* <Route exact path="/learn" component={ComingSoon} /> */}
        {/* <Route exact path="/home" component={CollectionsList2} /> */}
        {/* <Route exact path="/collections" render={props => {
            return <CollectionsList
              {...props}
              collections={this.state.collections}
              // messages={this.state.messages}
              // users={this.state.users}
              // deleteMessage={this.deleteMessage}
              // addMessage={this.addMessage}

              // stickMessagesOnDom={this.stickMessagesOnDom}

              /> }}
        /> */}
        <Route exact path="/collections" render={props => {
            return <Dashboard
              {...props}
              collections={this.state.collections}
              // getASpecificCollection={this.getASpecificCollection}
              /> }}
              />

          {/* the below `dynamic routing` was suggested by EmLem 2/8/19 thurs */}
         {/* <Route path="/collections/:collectionId(/d+)" render={props => {
            return <React.Fragment>
              <Dashboard
              {...props}
              collections={this.state.collections}

              // getASpecificCollection={this.getASpecificCollection}
              />

               <HasCard
              {...props}
              collections={this.state.quarters}
              addQ={this.addQ}
              />
            </React.Fragment>
            }}
              /> */}

          <Route exact path="/collections/Toby" render={props => {
            return <React.Fragment>
              <Dashboard />
              <HasCard
            {...props}
            collections={this.state.TobysQuarters}
            addQ={this.addQ}
            />
              <NeedsCard />
            </React.Fragment>
          }}
          />
          <Route exact path="/collections/Nate" render={props => {
            return <React.Fragment>
              <Dashboard />
              <HasCard
                {...props}
                collections={this.state.NatesQuarters}
                addQ={this.addQ}
              />
          <NeedsCard />
            </React.Fragment>
          }}
          />
          <Route exact path="/collections/Andrew" render={props => {
            return <React.Fragment>
              <Dashboard />
              <HasCard
            {...props}
            collections={this.state.AndrewsQuarters}
            addQ={this.addQ}
            />
            <NeedsCard />
            </React.Fragment>
          }}
          />
          <Route exact path="/collections/Laney" render={props => {
            return <React.Fragment>
              <Dashboard />
                <HasCard
              {...props}
              collections={this.state.LaneysQuarters}
              addQ={this.addQ}
              />
          <NeedsCard />
            </React.Fragment>
          }}
          />
          <Route exact path="/collections/Mary_Mac" render={props => {
            return <React.Fragment>
              <Dashboard />
              <HasCard
            {...props}
            collections={this.state.MaryMacsQuarters}
            addQ={this.addQ}
            />
            <NeedsCard />
            </React.Fragment>
          }}
          />
          <Route exact path="/collections/Molly_Patrick" render={props => {
            return <React.Fragment>
              <Dashboard />
              <HasCard
                {...props}
                collections={this.state.MollysQuarters}
                addQ={this.addQ}
              />
            <NeedsCard />
            </React.Fragment>
          }}
          />

      </React.Fragment >
    )

}
}