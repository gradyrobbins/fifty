import React, { Component } from "react"
// import { Link } from "react-router-dom";
import HasCard from "./Has/HasCard";
import NeedsCard from "./Needs/NeedsCard"
import DataManager from "../../modules/DataManager";




// var check= this.state.userSpecific,
// data = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55];

// var res = check.filter( function(n) { return !this.has(n) }, new Set(data) );

// console.log(res);

export default class CollectionDetail extends Component {
    state ={
        matchlist: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55],
        userSpecific: [],
        needsList: []
    }


  componentDidMount() {
    const newState = {}
    DataManager.getASpecificCollection(this.props.match.params.collectionId)
    .then(userSpecific => newState.userSpecific = userSpecific)
    .then( (userSpecific) => console.log(" quarters that belong to this collectionId's set: ", userSpecific))

    // .then( (userSpecific) => userSpecific.map()



    .then(() => this.setState(newState))
};

//  below, use this.state.userSpecific to map onto <Has Card />

// //how to compare 2 arrays for matches
//  compare(arr1,arr2){
//     const matches =[];
//     arr1.forEach((e1)=>arr2.forEach((e2)=>
//         {if (e1 === e2){matches.push(e1)}}
//                                             ));
//     return matches;
// }




    render() {
        /*
            Using the route parameter, find whose collection you want to display by looking at the `this.props.collections` that was passed down from ApplicationViews
        */

        const collection = this.props.collections.find(a => a.id === parseInt(this.props.match.params.collectionId)) || {}

        // console.log("collection name:" , collection)
        // const quarters = this.props.quarters
        // console.log("this.props.quarters = " , quarters)


        return (
            <React.Fragment>
                <br/>
                <br/>
                <section className="collection">
                    <div key={collection.id} className="card">
                        <h3>{collection.collectorsName}'s Collection: </h3>
                        <br/>

                        <button>Add a new Quarter to {collection.collectorsName}'s Collection</button>
                    </div>
                </section>
                        {/* <button>View all Collections</button> */}
                <br/>
                <br/>


                <HasCard
                        // {...props}
                        quarters={this.state.userSpecific}
                        />
                <br/>
                <br/>

                <br/>
                <NeedsCard
                        quarters={this.state.needsList}
                        matchlist={this.state.matchlist}

                />

            </React.Fragment>
        )
    }
}