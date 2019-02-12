import React, { Component } from 'react'
// import Dashboard from '../../Dashboard/Dashboard'
import './NeedsCard.css'
import stock_qtr from './../../img/stock_Qtr_Img.png'
// import CollectionsList from '../../Dashboard/CollectionsList';


class NeedsCard extends Component {
    render() {
        console.log("<NEEDSCARD /> props =", this.props)

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
                            this.props.addQ(quarter)
                            }}> Add this quarter id # {quarter}</button>

                        <button type="button"
                            className="btn btn-success"
                            onClick={() => {
                                this.props.history.push(`/collection/${quarter.id}/add`)}
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