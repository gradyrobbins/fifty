import { Route, Redirect} from 'react-router-dom'
import React, { Component } from 'react';

import DataManager from './modules/DataManager'
import Login from './components/login/LoginForm'
import Learn from './components/Learn/Learn'
import CollectionDetail from './components/Collection/CollectionDetail'
import CollectionsList from './components/Dashboard/CollectionsList';
import AddAQuarterForm from './components/Collection/Needs/AddAQuarterForm'
// import JokeEditForm from './components/Collection/Has/JokeEditForm'
import QDetail from './components/Collection/QDetail'

export default class ApplicationViews extends Component {

  // Check if credentials are in local storage
  isAuthenticated = () => localStorage.getItem("credentials") !== null

  state = {
    users: [],
    usas: [],
    // quarters: [],
    collections: [],
    matchlist: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56],
    specificCollection: []
  }

  getAllUsers = user => DataManager.getAll("users", user)
    .then(users => this.setState({
      users: users
    }))

  getASpecificCollection = id => DataManager.getASpecificCollection(id)
  .then(specificCollection => this.setState({
    specificCollection: specificCollection
  }))

  addQ = quarter =>{
  return DataManager.add("quarters", quarter)
  // .then(() => this.fetchSpecificCollection(this.props.match.params.collectionId))
  .then(() => DataManager.getAll("quarters"))
    // .then(quarters => this.setState({
    //   quarters: quarters
    // }))
    // .then(() => this.props.history.push("/collections"))
  }

  editQ = (id, item) => DataManager.edit("quarters", id, item)
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
    return ( <React.Fragment>
                <Route exact path="/login" component={Login} />
                <Route exact path="/learn" render={props => {
                  return <Learn
                    usas={this.state.usas}
                  />
                }}
                />
                <Route exact path="/collections" render={props => {
                   if (this.isAuthenticated()) {
                  return <CollectionsList
                        {...props}
                        collections={this.state.collections}
                        />
                    } else {
                          return <Redirect to="/" />
                        }
                  }}
                />


            <Route path="/collection/:collectionId(\d+)" render={props => {
                return <React.Fragment>

                              <CollectionDetail
                              {...props}
                              quarters={this.state.quarters}
                              collections={this.state.collections}
                              matchlist={this.state.matchlist}
                              addQ={this.addQ}
                              deleteQ={this.deleteQ}
                              editQ={this.editQ}
                              // singleQ={this.state.singleQ}
                              // getASpecificQ={this.getASpecificQ}
                              />
                              {/* <QDetail
                              {...props}
                    // singleQ={this.state.singleQ}

                /> */}
                      </React.Fragment>
                }} />
            {/* <Route path="/collection/:collectionId(\d+)/:quarterId(\d+)" render={props => {
                return <React.Fragment>

                          <QDetail
                          editQ={this.editQ}
                          getASpecificQ={this.getASpecificQ}

                                />

                      </React.Fragment>
                }} /> */}

            <Route path="/collection/add" render={props => {
              return <React.Fragment>

                              {/* <CollectionDetail
                              {...props}
                              {...props}
                              quarters={this.state.quarters}
                              collections={this.state.collections}
                              addQ={this.addQ}
                            /> */}
                            <AddAQuarterForm

                              {...props}
                              collections={this.state.collections}
                              addQ={this.addQ}
                              usas={this.state.usas}
                              />

                      </React.Fragment>
                }} />

            <Route exact path="/collection/edit/:quarterId(\d+)" render={(props) => {
                      if (this.isAuthenticated()) {
                        return <React.Fragment>
                          <QDetail
                        editQ={this.editQ}
                        getASpecificQ={this.getASpecificQ}

                                />
                                </React.Fragment>
                      } else {
                        return <Redirect to="/login" />
                      }
                    }} />

            {/* use the below routing  as a template for edit */}
            {/* <Route exact path="/jokes/edit/:jokeId(\d+)" render={(props) => {
                      if (this.isAuthenticated()) {
                        return <JokeEditForm {...props} editJoke={this.editJoke} deleteJoke={this.deleteJoke} jokes={this.state.jokes} />
                      } else {
                        return <Redirect to="/login" />
                      }
                    }} /> */}


            </React.Fragment>

)
}
}
