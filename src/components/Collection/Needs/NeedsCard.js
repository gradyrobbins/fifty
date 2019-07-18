import React, { Component } from 'react'
import './NeedsCard.css'
import stock_qtr from './../../img/stock_Qtr_Img.png'


class NeedsCard extends Component {

    state = {
        quarters: [],
        matchlist: [],
        needslist: []
    }
    componentDidMount() {
        console.log("this.props", this.props)
        this.setState({
            quarters: this.props.quarters,
            matchlist: this.props.matchlist,
            needslist: []

        })
    }
    componentDidUpdate(prevProps) {
        if (prevProps.quarters !== this.props.quarters) {
            this.setState({
                quarters: this.props.quarters,
                matchlist: this.props.matchlist,
                needslist: this.needslist
            })
        }
    }
    render() {

        // whose collection are we looking at?
        const collection = this.props.collections.find(a => a.id === parseInt(this.props.match.params.collectionId)) || {}

        // arr1 holds the usaId's of the quarters in their collection
        let arr1 = [];
        this.props.quarters.forEach(function (item) {
            arr1.push(item.usaId);
        });
        console.log("arr1:  ", arr1);

        // arr2 holds an array 1 - 56 representing each unique quarter needed to complete a collection
        let arr2 = this.state.matchlist;
        console.log("arr2: ", arr2)

        // this function is built to compare the collector's array of "HasQuarters" (arr1) against the matchList array of all 56 usaID; it pushes matches into an separate array.
        function compare(arr1, arr2) {
            const matches = [];

            arr1.forEach((e1) => arr2.forEach((e2) => { if (e1 === e2) { matches.push(e1) } }
            ));
            return matches;
        }

        //here is where i invoke compare()  as defined above
        let matchedStateIDs = compare(arr1, arr2);
        console.log("matched state_id's: ", matchedStateIDs)

        //this maps over the matched ID's and link them to === state_id's in the master list which was passed in via props
        // let gotem = matchedStateIDs.map(e =>  this.props.states.find(state => state.state_id === e) ) || {}

        //the below function was based on: https://stackoverflow.com/questions/40537972/compare-2-arrays-and-show-unmatched-elements-from-array-1
        var missingStateIDs = arr2.filter(function (n) { return !this.has(n) }, new Set(arr1));
        console.log("missing :", missingStateIDs);









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
                    {/* <img src={stock_qtr} alt="bloop" height="175" width="175" /> */}
                </div>
                <section className="NEEDScollection">

                    {
                        missingStateIDs.map(quarter =>
                            <ul key={quarter} id={quarter}  >
                                <li>StateId #: {quarter} </li>
                            </ul>
                        )
                    }
                </section>

                <section>
                    
                </section>
            </React.Fragment>
        )
    }
}

export default NeedsCard