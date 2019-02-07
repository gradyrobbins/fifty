import React, { Component } from 'react'
import CollectionsList2 from '../Dashboard'

class HasCard extends Component {
    render() {
        console.log("this.props", this.props.collections)

        return (
            <React.Fragment>
                <br/>
                <CollectionsList2 />
                <br/>
            <div>
            <button id="AddMessage" onClick={(id) => {console.log("add button clicked")
                            // this.props.addQ(id)
                            //    this.props.history.push("/collections/")
                            }}>Add a new quarter</button>
            <section className="HAScollections">
            <h2>Has: </h2>
            {
                this.props.collections.map(quarter =>

                    <div key={quarter.id} className="collection" >
                        <p>StateId #: {quarter.usaId} </p>
                        <br/>
                        <p>Notes: {quarter.notes}</p>
                        <br/>
                        <button key={quarter.id} id="edit" onClick={() => {console.log(`edit button clicked - NO UNIQUE ID YET`)

                            }}>Edit this quarter</button>
                    </div>

                )
            }
            </section>
            <section className="NEEDScollections">
            <h2>NEEDS: </h2>
            <br/>
            <h4>Logic, Functions, and data passed via props go here to be mapped over</h4>
            {/* {
                this.props.collections.map(quarter =>

                    <div key={quarter.id} className="collection" >
                        <p>StateId #: {quarter.usaId} </p>
                        <br/>
                        <p>Notes: {quarter.notes}</p>
                        <br/>
                    </div>

                )
            } */}
            </section>
             </div>
             </React.Fragment>
        )
    }
}

export default HasCard