import React, { Component } from 'react'
import './HasCard.css'
import stock_qtr from './../../img/stock_Qtr_Img.png'

export default class HasCard extends Component {

    state={
        quarters: [],
        singleQ: []
    }

    componentDidMount() {
        console.log("this.props", this.props)
        this.setState({quarters : this.props.quarters,
            singleQ: this.props.singleQ
        })
    }

    // anytime the user clicks a different collection to view, new props are passed down
    // from <Collection Detail />     into     <HasCard /> so componentDidUpdate handles the new props.
    // use console.log(this.props) to verify componentDidUpdate is firing
    componentDidUpdate(prevProps) {
       if(prevProps.quarters !== this.props.quarters
        || prevProps.singleQ !== this.props.singleQ ) {
           this.setState({quarters : this.props.quarters,
                            singleQ: this.props.singleQ
        })
       }
    }

    render() {
console.log("<HasCard /> props =", this.props)

const collection = this.props.collections.find(a => a.id === parseInt(this.props.match.params.collectionId)) || {}


        return (
            <React.Fragment>
                <br/>
                <br/>
            <div>
            <h2> {collection.collectorsName} Has: </h2>
                        <br/>
            <section className="HAScollections">
                        <br/>
            {
                this.state.quarters.map(quarter =>

                    <div key={quarter.id} id={quarter.id} className="collection" >
                        <h4> {quarter.usa.name}</h4>
                        <p>StateId #: {quarter.usaId} </p>
                        <br/>
                        <br/>
                        <img alt="stock-qtr" src={stock_qtr} className="icon-qtr" />
                        <br/>
                        <p>Notes: {quarter.notes}</p>
                        <br/>
                        <button key={quarter.id} id="edit" onClick={() => {
                            // console.log("edit button clicked")
                            this.props.fetchSpecificQ(quarter.id)
                            .then(() => {
                                this.props.history.push(`/collection/edit/${quarter.id}`)
                            }
                                )
                            }
                            }> View and update notes on this quarter</button>

                        <button id={quarter.id} onClick={() => {
                            // console.log(`delete button clicked `)
                            this.props.deleteQ(quarter.id)
                            }}> Delete this quarter</button>
                    </div>

                )
            }
            </section>
            {/* <QDetail
                    editQ={this.props.editQ}
                    singleQ={this.state.singleQ}
                    // getASpecificQ={ this.props.fetchSpecificQ(quarter.id)}
            /> */}
             </div>
             </React.Fragment>
        )
    }
}
