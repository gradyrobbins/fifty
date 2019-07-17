import React, { Component } from 'react'
// import NavBar from '../nav/NavBar';
import "bootstrap/dist/css/bootstrap.min.css"
import DataManager from "./../../modules/DataManager"

export default class Mycoins2  extends Component {

componentDidMount() {
    let whoisit = this.props.match.params;
    DataManager.getAllUserData("quarter", whoisit.userId)
        .then(thisusersquarters => this.setState({thisusersquarters : thisusersquarters}))
}

state = {
    thisusersquarters:[],
};

render() {
    // console.log("this.props =", this.props)
    // console.log("this.props.match.params =", this.props.match.params)
    let whoisit = this.props.match.params;

    console.log("this userId: " , whoisit.userId)

    //function to extract the user_id property from inside the array of objects for later use
        function getuserID(item) {
        var newphonewhodis = item.user_id;
        return newphonewhodis ;
        }
    //function to extract the state_id property from inside the array of objects for later use
        function getstateID(item) {
        var bloop = item.state_id;
        return bloop ;
        }

    // map over the JSON's quarter collection and return an array[] of user_id's for each quarter.
        const allQuarters = this.props.quarters.map(getuserID) || {}
        console.log("all quarters, listed in an array by who owns them:" , allQuarters)




// function to extract the state's name property out of an object
// function getstatename(item) {
//     var statename = item.name;
//     return statename ;
// }

//map over the current/specific user's collection and return an array[] of their collection.
const myStateIDs = this.state.thisusersquarters.map(getstateID) || {}
// console.log("my own collection's state_id's" , myStateIDs)

//map over the entire list of states/territories and return an array [] of state_id's
const allStateIDs = this.props.states.map(getstateID) || {}
console.log("entire USA state_id's", allStateIDs)

// this function is built to compare the collections's array of "HasQuarters" against the  matchList array of all 56 usaID
function compare(arr1,arr2){
    const matches =[];

    arr1.forEach((e1)=>arr2.forEach((e2)=>
        {if (e1 === e2){matches.push(e1)}}
                                            ));
    return matches;
}



//here is where i invoke compare()  as defined above
let matchedStateIDs = compare(myStateIDs, allStateIDs);
console.log("matched state_id's: ", matchedStateIDs)

//this maps over the matched ID's and link them to === state_id's in the master list which was passed in via props
// let gotem = matchedStateIDs.map(e =>  this.props.states.find(state => state.state_id === e) ) || {}

//the below function was based on: https://stackoverflow.com/questions/40537972/compare-2-arrays-and-show-unmatched-elements-from-array-1
var missingStateIDs = allStateIDs.filter( function(n) { return !this.has(n) }, new Set(myStateIDs) );
// console.log("missing :" , missingStateIDs);
let needem = missingStateIDs.map(e =>  this.props.states.find(state => state.state_id === e) ) || {}


// return:  map the "got 'em[] " array over card, map the "need 'em []" array over card; render to DOM

        return (
            <div>
                {/* <NavBar /> */}
                    <div className="container">

                    This collector is looking for the following states:
                    <div className="row">

                    <section className="col">
                        {needem.map(taco =>
                        {
                            // console.log("taco =" , taco)
                            return <div className="Card" key={taco.state_id}>
                                          {taco.name}
                                    </div>
                                }
                                )
                        }
                    </section>
                    </div>
                </div>
            </div>
        );
    }
}
