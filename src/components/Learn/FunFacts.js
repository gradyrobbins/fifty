import React, { Component } from 'react'
import './Learn.css'

class FunFacts extends Component {

    state = {
        justClicked: [],
    }

    componentDidMount() {
        console.log("this.props", this.props)
        this.setState({
            justClicked: [],
        })
    }

    componentDidUpdate(prevProps) {
        if (prevProps.justClicked !== this.props.justClicked) {
            this.setState({
                justClicked: this.props.justClicked,

            })
        }
    }

    render() {

        console.log("<FunFacts /> props (ComponentDidUpdate):" + this.props.justClicked)
        return (
            <section className="funFacts">
                {/* <div className="Card" key={this.state.justClicked.id}></div>
                    <br/>
                    <br/> */}
                    <strong> {this.state.justClicked.name} </strong><br/>
                    <hr/>
                    <img src={this.state.justClicked.image} alt={this.state.justClicked.name} height="150" width="150" />
                    <ul>
                        <br/>
                        <li><strong>Date of Statehood:  </strong>{this.state.justClicked.Statehood}</li>
                        <li><strong>Date the State Quarter went into circulation:  </strong>{this.state.justClicked.year}</li>
                        <li><strong>Capital:  </strong>{this.state.justClicked.Capital}</li>
                        <li><strong>Nicknames:  </strong>{this.state.justClicked.Nicknames}</li>
                        <li><strong>Motto:  </strong>{this.state.justClicked.Motto}</li>
                        <li><strong>Flower:  </strong>{this.state.justClicked.Flower}</li>
                        <li><strong>Bird:  </strong>{this.state.justClicked.Bird}</li>
                    </ul>
            </section>
                )
            }
        }

        export default FunFacts



