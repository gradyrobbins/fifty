import React, { Component } from 'react'
// import Dashboard from '../../Dashboard/Dashboard'
import './HasCard.css'
import stock_qtr from './../../img/stock_Qtr_Img.png'

class HasCard extends Component {
    render() {
        console.log("this.props =", this.props)

        return (
            <React.Fragment>
                <br/>
                {/* <Dashboard /> */}

            <div>


                        
            <h2>Has: </h2>
                        <br/>
            <section className="HAScollections">
                        <br/>
            {
                this.props.collections.map(quarter =>

                    <div key={quarter.id} id={quarter.id} className="collection" >
                        <p>StateId #: {quarter.usaId} </p>
                        <br/>
                        <img alt="stock-qtr" src={stock_qtr} className="icon-qtr" />
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