import React, { Component } from "react"
import HasCard from "./Has/HasCard";
import NeedsCard from "./Needs/NeedsCard"
import DataManager from "../../modules/DataManager";
import './CollectionDetail.css'

export default class CollectionDetail extends Component {
    state = {
        matchlist: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56],
        userSpecific: [],
        singleQ: "",
        needsList: [],
    }

    fetchSpecificCollection = (collectionId) => {
        const newState = {}
        DataManager.getASpecificCollection(collectionId)
            .then(userSpecific => newState.userSpecific = userSpecific)
            // .then( (userSpecific) => console.log(" quarters that belong to this collectionId's set: ", userSpecific))
            .then(() => this.setState(newState))
    }

    fetchSpecificQ = (quarterId) => {
        const newState = {}
        return DataManager.getASpecificQ(quarterId)
            // DataManager.getASpecificQ_expand(quarterId)
            .then(singleQ => {
                newState.singleQ = singleQ
                console.log(" single Q: ??", singleQ)
                this.setState(newState)
            })
    }

    componentDidMount() {
        this.fetchSpecificCollection(this.props.match.params.collectionId)
    };

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.collectionId !== this.props.match.params.collectionId) {
            this.fetchSpecificCollection(this.props.match.params.collectionId)
        }
    };

    deleteQ = id => DataManager.delete("quarters", id)
        .then(() => this.fetchSpecificCollection(this.props.match.params.collectionId))

    addQ = quarter => DataManager.add("quarters", quarter)
        .then(() => this.fetchSpecificCollection(this.props.match.params.collectionId))

        .then(() => DataManager.getAll("quarters"))
        .then(quarters => this.setState({
            quarters: quarters
        }))
        .then(() => this.props.history.push("/collections"))

    




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
        //​​​​​​​​​​​​​​react-router-dom stores the route params in the component’s props and it enables us to access this parameter via this.props.match.params.collectionId. Once we have the collectionId, we then find the collection with a matching ID in the quarter array, and set it in the component state as userSpecific. This is handled in DataManager.getASpecificCollection.

        const collection = this.props.collections.find(a => a.id === parseInt(this.props.match.params.collectionId)) || {}

        // console.log("collection name:" , collection)
        // const quarters = this.props.quarters
        // console.log("this.props.quarters = " , quarters)


        return (
            <React.Fragment>
                <hr />
                <div className="collection">
                    <section >
                        <div key={collection.id} className="card">
                            <h3>{collection.collectorsName}'s Collection: </h3>
                            <button type="button"
                                className="btn btn-success"
                                onClick={() => {
                                    this.props.history.push(`/collection/${collection.id}/add`)
                                }
                                }>
                                Add a new Quarter to {collection.collectorsName}'s Collection
                        </button>
                        </div>
                    </section>
                    <hr />

                    <HasCard
                        // {...props}
                        quarters={this.state.userSpecific}
                        // quarters={this.props.quarters}
                        getASpecificCollection={this.fetchSpecificCollection}
                        deleteQ={this.deleteQ}
                        fetchSpecificQ={this.fetchSpecificQ}
                        editQ={this.props.editQ}
                        singleQ={this.state.singleQ}
                        history={this.props.history}
                        match={this.props.match}
                        collections={this.props.collections}
                    />
                    <hr/>

                    <NeedsCard
                        // {...props}
                        quarters={this.state.userSpecific}
                        matchlist={this.state.matchlist}
                        addAQuarter={this.props.addAQuarter}
                        usas={this.props.usas}
                        addQ={this.addQ}
                        getASpecificCollection={this.fetchSpecificCollection}
                        history={this.props.history}
                        match={this.props.match}
                        collections={this.props.collections}
                        getASpecific56={this.getASpecific56}
                        />

                </div>
            </React.Fragment>
        )
    }
}