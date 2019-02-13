import React, { Component } from "react"
import "../login/Login.css"
import NavBar from './../nav/NavBar'

export default class QForm extends Component {
    // Set initial state
    state = {
        
        state_id: [],
        user_id:[],
       
    }

    // Update state whenever an input field is edited
    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    /*
        Local method for validation, creating event object, and
        invoking the function reference passed from parent component
     */

     //setting default input conditions - throwing alert
    addnewQ = evt => {
        evt.preventDefault()
        if (this.state.state_id === "" || this.state.user_id === "") {
            window.alert("You need to have both a state AND a user!")
        } else {
            const item = {
                state_id: this.state.state_id,
                user_id: this.state.user_id,
                


            }

            // Create the joke and redirect user to their collection
            this.props.addQ(item).then(() => this.props.history.push("/mycoincollection"))
        }
    }

    render() {
        return (
            <div>
            <NavBar />
            <React.Fragment>
                <form className="jokeForm">
                    <div className="form-group">
                        <label htmlFor="state_id">Add a new State to your collection</label>
                        <input type="text" required={true}
                            onChange={this.handleFieldChange}
                            id="state_id"
                            placeholder="select the new Stateid" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="user_id">notes?</label>
                        <input type="text" required={true}
                            onChange={this.handleFieldChange}
                            id="user_id"
                            placeholder="add userid here" />
                    </div>
                    <button type="submit" onClick={this.addnewQ}
                    className="btn btn-primary">Submit</button>


                </form>
            </React.Fragment>
            </div>
        )
    }
}
