import React, { Component } from 'react'
import Dashboard from '../Dashboard'
import './HasCard.css'

class HasCard extends Component {
    render() {
        console.log("this.props.collections =", this.props.collections)

        return (
            <React.Fragment>
                <br/>
                <Dashboard />
                <br/>
                <br/>
                <br/>
                <br/>

            <div>

            <button className="AddQuarter" onClick={(id) => {console.log("add button clicked")
                            // this.props.addQ(this.idx)
                            //    this.props.history.push("/collections/")
                        }}>Add a new quarter</button>
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

                            }}> Edit this quarter id {quarter.id}</button>
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