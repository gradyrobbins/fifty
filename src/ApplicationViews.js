import { Route, Redirect} from 'react-router-dom'
import React, { Component } from 'react';

import DataManager from './modules/DataManager'
import Login from './components/login/LoginForm'
// import LandingPage from './components/landing/LandingPage'
// import CollectionsList from './components/Dashboard/CollectionsList'
import Dashboard from './components/Dashboard/Dashboard'
import CollectionDetail from './components/Collection/CollectionDetail'
import HasCard from './components/Collection/Has/HasCard'
import NeedsCard from './components/Collection/Needs/NeedsCard'
import CollectionsList from './components/Dashboard/CollectionsList';
// import NavBar from './components/Nav/NavBar'

export default class ApplicationViews extends Component {

  // Check if credentials are in local storage
  isAuthenticated = () => localStorage.getItem("credentials") !== null

  state = {
    users: [],
    usas: [],
    quarters: [],
    collections: [],
    specificCollection: [],
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

    addQ = quarter => DataManager.add("quarters", quarter)
    .then(() => DataManager.getAll("quarters"))
    .then(quarters => this.setState({
      quarters: quarters
    }))

    deleteQ = id => DataManager.delete("quarters", id)
    .then(() => DataManager.getAll("quarters"))
    .then(quarters => this.setState({
      quarters: quarters
    }))

    getASpecificCollection = id => DataManager.getASpecificCollection(id)
    .then(specificCollection => this.setState({
      specificCollection: specificCollection
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
      // .then(()=>DataManager.getASpecificCollection(1))
      // .then(collections => newState.TobysQuarters = collections)
      // .then(()=>DataManager.getASpecificCollection(2))
      // .then(collections => newState.NatesQuarters = collections)
      // .then(()=>DataManager.getASpecificCollection(3))
      // .then(collections => newState.AndrewsQuarters = collections)
      // .then(()=>DataManager.getASpecificCollection(4))
      // .then(collections => newState.LaneysQuarters = collections)
      // .then(()=>DataManager.getASpecificCollection(5))
      // .then(collections => newState.MaryMacsQuarters = collections)
      // .then(()=>DataManager.getASpecificCollection(6))
      // .then(collections => newState.MollysQuarters = collections)

      .then(() => this.setState(newState))
  };

  render() {
    return ( <React.Fragment>
                <Route exact path="/login" component={Login} />
                <Route exact path="/collections" render={props => {
                  return <CollectionsList
                        {...props}
                        collections={this.state.collections}
                        />
                  }}
                />

         <Route path="/collection/:collectionId(\d+)" render={props => {
            return <React.Fragment>
                          {/* <Dashboard
                          {...props}
                          collections={this.state.collections}
                          /> */}
                          <CollectionDetail
                          {...props}
                          quarters={this.state.quarters}
                          collections={this.state.collections}
                          matchlist={this.state.matchlist}
                          getASpecificCollection={this.getASpecificCollection}
                          />

                          {/* <HasCard
                          {...props}
                          collections={this.state.quarters}
                          addQ={this.addQ}
                          />
                          <NeedsCard
                          {...props}
                          addQ={this.addQ}
                          matchlist={this.state.matchlist}
                          /> */}
                  </React.Fragment>
            }} />
            </React.Fragment>

    )
}
}
