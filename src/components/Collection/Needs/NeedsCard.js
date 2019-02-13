import React, { Component } from 'react'
// import Dashboard from '../../Dashboard/Dashboard'
import './NeedsCard.css'
import stock_qtr from './../../img/stock_Qtr_Img.png'
// import CollectionsList from '../../Dashboard/CollectionsList';
// import CollectionDetail from './../CollectionDetail'

class NeedsCard extends Component {

    state={
        quarters: [],
        matchlist: []
    }
    componentDidUpdate(prevProps) {
       if(prevProps.quarters !== this.props.quarters) {
           this.setState({quarters : this.props.quarters})
       }
    }
    componentDidMount() {
           this.setState({quarters : this.props.quarters,
                        //  matchlist : this.props.matchlist
        })
    }


    render() {
        console.log("<NEEDSCARD /> props =", this.props)
        // console.log("<NEEDSCARD /> props.history=", this.props.history)


        return (
        <React.Fragment>
            <br/>
        {/* <Dashboard /> */}
            <br/>
            <br/>
            {/* <CollectionsList /> */}
            <br/>
            <br/>
            <div>
            <br/>
            <h2>Needs: </h2>
            <br/>
            <section className="NEEDScollections">
            <br/>

            {/* "Some" props are coming in. are they the right ones?

            Logic needed:  compare what this collection "HAS" against a master list of all 56 to get a list of what this collection "NEEDS"; map over this Needs array onto Needs-Card-Component */}

            {
                this.props.matchlist.map(quarter =>

                    <div key={quarter} id={quarter} className="collection" >
                        <p>Matchlist  #: {quarter} </p>
                        <img src={stock_qtr} alt="" width="50px" className="icon--stock_Qtr_image" />

                        <button key={quarter} id="add" onClick={() => {
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
                        </button>

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