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

            no props are coming in yet
            {
                // this.props.collections.map(quarter =>

                    // <div key={quarter.id} id={quarter.id} className="collection" >
                    //     <p>StateId #: {quarter.usaId} </p>
                    //     <br/>
                    //     <p>Notes: {quarter.notes}</p>
                    //     <br/>
                    //     <button key={quarter.id} id="add" onClick={() => {console.log(`add button clicked `)

                    //         }}> Add this quarter id {quarter.id}</button>
                    // </div>

                // )
            }
            </section>

             </div>
        </React.Fragment>
        )
    }
}

export default NeedsCard