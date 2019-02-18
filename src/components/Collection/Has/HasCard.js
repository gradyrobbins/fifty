import React, { Component } from 'react'
import './HasCard.css'
import stock_qtr from './../../img/stock_Qtr_Img.png'
import QDetail from '../QDetail';

class HasCard extends Component {

    state={
        quarters: [],
        singleQ: []

    }
    componentDidUpdate(prevProps) {
       if(prevProps.quarters !== this.props.quarters || prevProps.singleQ !== this.props.singleQ ) {
           this.setState({quarters : this.props.quarters,
                            singleQ: this.props.singleQ
        })
       }
    //    else if(prevProps.singleQ !== this.props.singleQ) {
    //        this.setState({singleQ: this.props.singleQ})
    //    }
    }
    componentDidMount() {
        console.log("this.props", this.props)
           this.setState({quarters : this.props.quarters,
                            singleQ: this.props.singleQ
        })
    }
    render() {
        console.log("<HasCard /> props =", this.props)
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
                        <p>State Name via _expand: {quarter.name}</p>
                        <br/>
                        <img alt="stock-qtr" src={stock_qtr} className="icon-qtr" />
                        <br/>
                        <p>Notes: {quarter.notes}</p>
                        <br/>
                        <button key={quarter.id} id="edit" onClick={() => {

                            this.props.fetchSpecificQ(quarter.id)
                            // this.props.history.push(`/collection/{collectionId}/{quarter.id}`)

                            }}> View and update notes on this quarter</button>

                        <button id={quarter.id} onClick={() => {
                            // console.log(`delete button clicked `)
                            this.props.deleteQ(quarter.id)
                            }}> Delete this quarter</button>
                    </div>

                )
            }
            </section>
            <QDetail
                    editQ={this.props.editQ}
                    singleQ={this.state.singleQ}
                    // getASpecificQ={ this.props.fetchSpecificQ(quarter.id)}
            />
             </div>
             </React.Fragment>
        )
    }
}

export default HasCard