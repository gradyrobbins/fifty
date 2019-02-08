import React, { Component } from 'react'
import Dashboard from '../Dashboard'
import './NeedsCard.css'

class NeedsCard extends Component {
    render() {
        console.log("this.props =", this.props)

        return (
        <React.Fragment>
            <br/>
        <Dashboard />
            <br/>
            <br/>
            <br/>
            <br/>
            <div>
            <br/>
            <h2>Needs: </h2>
            <br/>
            <section className="NEEDScollections">
            <br/>

            "Some" props are coming in. are they the right ones?

            Logic needed:  compare what this collection "HAS" against a master list of all 56 to get a list of what this collection "NEEDS"; map over this Needs array onto Needs-Card-Component

            {
                this.props.matchlist.map(quarter =>

                    <div key={quarter.id} id={quarter.id} className="collection" >
                        <p>Matchlist  #: {quarter} </p>

                        <button key={quarter.id} id="add" onClick={() => {
                            // console.log(`add button clicked `)
                            this.props.addQ(quarter)
                            }}> Add this quarter id # {quarter}</button>
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