import React, { Component } from 'react'
import './HasCard.css'
import stock_qtr from './../../img/stock_Qtr_Img.png'

class HasCard extends Component {

    state={
        quarters: []
    }
    componentDidUpdate(prevProps) {
       if(prevProps.quarters !== this.props.quarters) {
           this.setState({quarters : this.props.quarters})
       }
    }
    componentDidMount() {
           this.setState({quarters : this.props.quarters})
    }
    render() {
        // console.log("<HasCard /> props =", this.props)
        return (
            <React.Fragment>
                <br/>
                <br/>
            <div>
            <h2>Has: </h2>
                        <br/>
            <section className="HAScollections">
                        <br/>
            {
                this.state.quarters.map(quarter =>

                    <div key={quarter.id} id={quarter.id} className="collection" >
                        <p>StateId #: {quarter.usaId} </p>
                        <br/>
                        <img alt="stock-qtr" src={stock_qtr} className="icon-qtr" />
                        <br/>
                        <p>Notes: {quarter.notes}</p>
                        <br/>
                        <button key={quarter.id} id="edit" onClick={() => {console.log(`edit button clicked `)

                            }}> Edit this quarter# {quarter.id}</button>

                        <button id={quarter.id} onClick={() => {console.log(`delete button clicked `)

                            }}> Delete this quarter# {quarter.id}</button>
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