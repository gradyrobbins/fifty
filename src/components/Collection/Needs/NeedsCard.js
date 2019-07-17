import React, { Component } from 'react'
// import Dashboard from '../../Dashboard/Dashboard'
import './NeedsCard.css'
import stock_qtr from './../../img/stock_Qtr_Img.png'
// import CollectionsList from '../../Dashboard/CollectionsList';
// import CollectionDetail from './../CollectionDetail'

class NeedsCard extends Component {

    state = {
        quarters: [],
        matchlist: []
    }
    componentDidUpdate(prevProps) {
        if (prevProps.quarters !== this.props.quarters) {
            this.setState({ quarters: this.props.quarters })
        }
    }
    componentDidMount() {
        this.setState({
            quarters: this.props.quarters,
            matchlist: this.props.matchlist
        })
    }


    render() {
        // console.log("<NEEDSCARD /> props =", this.props)
        // console.log("<NEEDSCARD /> arr1 = [ ] ", this.props.matchlist)
        // console.log("<NEEDSCARD /> arr2 = [ ] ", this.props.quarters)


        const collection = this.props.collections.find(a => a.id === parseInt(this.props.match.params.collectionId)) || {}

        let myStateIDs = [];
        let arr1 = [];
        let arr2 = this.props.quarters;
        arr2.forEach(function (item) {
            arr1.push(item.usaId);
        })
        console.log("arr1:  ", arr1);
        let arr3 = this.state.matchlist;
        // console.log("arr3: " , arr3)

        // this function is built to compare the collector's array of "HasQuarters" (arr1) against the matchList array of all 56 usaID
        function compare(arr1, arr3) {
            const matches = [];

            arr1.forEach((e1) => arr3.forEach((e2) => { if (e1 === e2) { matches.push(e1) } }
            ));
            return matches;
        }

        //here is where i invoke compare()  as defined above
        let matchedStateIDs = compare(arr1, arr3);
        console.log("matched state_id's: ", matchedStateIDs)

        //the below function was based on: https://stackoverflow.com/questions/40537972/compare-2-arrays-and-show-unmatched-elements-from-array-1
        var missingStateIDs = arr3.filter(function (n) { return !this.has(n) }, new Set(arr1));
        console.log("missing :", missingStateIDs);
        // let needem = missingStateIDs.map(e => this.props.states.find(state => state.state_id === e)) || {}


        return (
            <React.Fragment>
                <br />
                <br />
                <br />
                <br />
                <br />
                <div>
                    <br />
                    <h2> {collection.collectorsName} Needs: </h2>
                    <br />
                    <section className="NEEDScollections">
                        <br />

                        {/* "Some" props are coming in. are they the right ones?

            Logic needed:  compare what this collection "HAS" against a master list of all 56 to get a list of what this collection "NEEDS"; map over this Needs array onto Needs-Card-Component */}

                        {
                            this.props.matchlist.map(quarter =>

                                <div key={quarter} id={quarter} className="collection" >
                                    <p>Matchlist  #: {quarter} </p>
                                    <img src={stock_qtr} alt="heads" width="50px" className="icon--stock_Qtr_image" />

                                    {/* <button key={quarter} id="add" onClick={() => {
                            // console.log(`add button clicked `)
                            this.props.addAQuarter(quarter)
                            }}> Add this quarter id # {quarter}</button>

                        <button type="button"
                            className="btn btn-success"
                            onClick={() => {
                                console.log("bloopy bloop bloop")
                                document.location.href='http://localhost:3000/collection/add'
                                // this.props.addAQuarter(quarter)
                                // this.props.history.push(`/collection/{this.props.collections/}/add`)
                            }
                            }>
                                Add this Quarter
                        </button> */}

                                </div>

                            )
                        }

                    </section>

                </div>
            </React.Fragment>
        )
    }
}

export default NeedsCard