import React, { Component } from 'react'
import './LandingPage.css'

export default class LandingPage extends Component {

    render() {

        return (
        <React.Fragment>
            <div className="LandingPage" >
                <div className="landingButtons" >
                    <div className="loginButton">
                        <button type="button"
                            className="btn btn-success"
                            onClick={() => {
                                document.location.href = 'http://localhost:3000/login'
                                // this.props.history.push("/login")
                            }
                        }>Login</button>
                    </div>
                    <div className="registerButton">
                        <button type="button"
                            className="btn btn-success"
                            onClick={() => {
                                alert("Coming soon! Begin your own collection by registering")
                                // document.location.href = 'http://localhost:3000/register'
                                // this.props.history.push("/register")
                            }
                        }>Create Account</button>
                    </div>
                    <div className="learnButton">
                        <button type="button"
                            className="btn btn-success"
                            onClick={() => {

                                alert("Coming soon! Learn More fun facts about all States and Territories")
                                // document.location.href = 'http://localhost:3000/learn'

                                // this.props.history.push("/learn")
                            }
                            }>Learn More! </button>
                    </div>
                </div>
            </div>
        </React.Fragment>
        )

    }

}