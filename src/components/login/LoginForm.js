import React, { Component } from "react"
import DataManager from '../../modules/DataManager'
import './Login.css'


export default class Login extends Component {

    // Set initial state
    state = {
        email: "",
        password: ""
    }

    // Update state whenever an input field is edited
    handleFieldChange = (evt) => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    // Simplistic handler for login submit
    handleLogin = (e) => {
        e.preventDefault()

        /*
            For now, just store the email and password that
            the customer enters into local storage.
        */

        DataManager.getAll("users").then((user) => {
            console.log(user)
            const users = user.find(user => {
                return user.email === this.state.email && user.password === this.state.password //verifies account is in DB
            })

            if (users) {
                localStorage.setItem("credentials", JSON.stringify(users))
                document.location.href = 'http://localhost:3000/home'
            } else {
                alert("invalid credentials")
                document.location.href = 'http://localhost:3000/'
            }
        })

    }

    render() {
        return (
            <div className="forms">
                <div className="loginForm">
                    <form onSubmit={this.handleLogin}>
                        <h1 className="h3 mb-3 font-weight-normal">Please log in</h1>
                        <label htmlFor="inputEmail">
                            Email address
                        </label>
                        <input onChange={this.handleFieldChange} type="email"
                            id="email"
                            placeholder="Email address"
                            required="" autoFocus="" />
                        <label htmlFor="inputPassword">
                            Password
                        </label>
                        <input onChange={this.handleFieldChange} type="password"
                            id="password"
                            placeholder="Password"
                            required="" />
                        <button type="submit" className="btn btn-primary">
                            Login
                        </button>
                    </form>
                </div>
            </div>
        )
    }
}




