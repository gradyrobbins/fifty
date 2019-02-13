import React, { Component } from "react"
import "./AddAQuarterForm.css"

export default class AddAQuarterForm extends Component {
    // Set initial state
    state = {
        id: [],
      usaId: [],
      collectionId: [],
      userId:[],
      notes: ""
    }

    // Update state whenever an input field is edited
    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    /*
        Local method for validation, creating quarter object, and
        invoking the function reference passed from parent component
     */
    // constructNewAnimal = evt => {
    //     evt.preventDefault()
    //     {
    //         const quarter = {
    //             name: this.state.animalName,
    //             breed: this.state.breed,
    //             employeeId: this.props.employees.find(e => e.name === this.state.employee).id
    //         }

    //         // Create the quarter and redirect user to collections list
    //         this.props.addQ(quarter).then(() => this.props.history.push("/collections"))
    //     }
    // }

    addnewQ = evt => {
        evt.preventDefault()
            const item = {
            }

            // Create the quarter and redirect user to their collection
            this.props.addnewQ(item).then(() => this.props.history.push("/collections"))

    }


    render() {
        return (
            <React.Fragment>

                        <br/>
                        <br/>
                        <br/>
                <form className="AddAQuarterForm">

                    <div className="form-group">
                        <label htmlFor="collection">Whose collection?</label>
                        <select defaultValue="niece/nephew" name="collection" id="collection"
                                onChange={this.handleFieldChange}>
                            <option value="">Select whose collection you want to add a quarter to</option>
                        {
                            this.props.collections.map(e => <option key={e.id} id={e.id}>{e.collectorsName}</option>)
                        }
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="state_id">Add a new State to your collection</label>
                        <select defaultValue="USAs" name="quarter" id="quarter"
                                onChange={this.handleFieldChange}>
                            <option value="">Select which State quarter to add</option>
                        {
                            this.props.usas.map(e => <option key={e.id} id={e.id}>{e.name}</option>)
                        }
                        </select>

                    </div>
                    <div className="form-group">
                        <label htmlFor="user_id">notes?</label>
                        <input type="text" required={true}
                            onChange={this.handleFieldChange}
                            id="user_id"
                            placeholder="add notes here" />
                    </div>
                    <button type="submit" onClick={
                        console.log("console log the object that captures the values that user sets from the dropdowns")
                        // this.addnewQ
                    }
                    className="btn btn-primary">Submit</button>


                </form>
            </React.Fragment>
        )
    }
}