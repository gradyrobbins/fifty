import React, { Component } from 'react'
import Dashboard from '../Dashboard'
import './HasCard.css'

class HasCard extends Component {
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
                        <br/>
            <h2>Has: </h2>
                        <br/>
            <section className="HAScollections">
                        <br/>
            {
                this.props.collections.map(quarter =>

                    <div key={quarter.id} id={quarter.id} className="collection" >
                        <p>StateId #: {quarter.usaId} </p>
                        <br/>
                        <p>Notes: {quarter.notes}</p>
                        <br/>
                        <button key={quarter.id} id="edit" onClick={() => {console.log(`edit button clicked `)

                            }}> Edit this quarter# {quarter.id}</button>
                    </div>

                )
            }
            </section>

             </div>
             </React.Fragment>
        )
    }
}

export default HasCard