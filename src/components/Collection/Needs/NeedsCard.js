import React, { Component } from 'react'
import './NeedsCard.css'
import stock_qtr from './../../img/stock_Qtr_Img.png'


class NeedsCard extends Component {

    state = {
        quarters: [],
        matchlist: [],

    }
    componentDidMount() {
        console.log("this.props", this.props)
        this.setState({
            quarters: this.props.quarters,
            matchlist: this.props.matchlist,


        })
    }
    // componentDidUpdate(prevProps) {
    //     if (prevProps.quarters !== this.props.quarters) {
    //         this.setState({
    //             quarters: this.props.quarters,
    //             matchlist: this.props.matchlist,
    //             needslist: this.needslist
    //         })
    //     }
    // }
    render() {

        // whose collection are we looking at?
        const collection = this.props.collections.find(a => a.id === parseInt(this.props.match.params.collectionId)) || {}

        // arr1 holds the usaId's of the quarters in this child's collection
        let arr1 = [];
        this.props.quarters.forEach(function (item) {
            arr1.push(item.usaId);
        });
        // console.log("the usaId's of the quarters this collection HAS:  ", arr1);

        // arr2 holds an array 1 - 56 representing each unique quarter's id ("usas" in database.json)
        let arr2 = this.state.matchlist;

        //the below function was based on: https://stackoverflow.com/questions/40537972/compare-2-arrays-and-show-unmatched-elements-from-array-1
        var missingStateIDs = arr2.filter(function (n) { return !this.has(n) }, new Set(arr1));
        // console.log("these are the usaId's  NEEDED :", missingStateIDs);

        //this performs array methods on the "missingStateIds" array to gather an array of objects representing
        let needem = missingStateIDs.map(e => this.props.usas.find(state => state.id === e)) || {}
        // console.log("needem", needem)

        let bloop = [];
        //nested loops:  Outer loop iterates over [{}, {}, {}]
        for (let i = 0; i < needem.length; i++) {

            // console.log(needem[i])
            // innerloop logs key/values of each {}
            for (let prop in needem[i]) {
                //conditional on the key we need, just the state's name.  push it into the bloop array for later use.
                if (prop === "name") {
                    bloop.push(needem[i][prop])
                }
            }

        }
        // console.log("bloop", bloop.sort())
        let ABC = bloop.sort();
        // console.log(ABC)

        return (
            <React.Fragment>
                <br />
                <br />
                <br />
                <br />
                <br />
                <div>
                    <br />
                    <h2> {collection.collectorsName} Needs these Quarters: </h2>
                    <br />
                     <img src={stock_qtr} alt="stock quarter " height="175" width="175" />
                </div>

                <section className="HAScollections">
                    {
                        ABC.map(quarter =>
                            <ul key={quarter} id={quarter}  >
                                <li> {quarter}</li>
                            </ul>
                        )
                    }
                </section>

            </React.Fragment>
        )
    }
}

export default NeedsCard