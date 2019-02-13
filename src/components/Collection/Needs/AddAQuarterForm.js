import React, { Component } from "react"
import "./AddAQuarterForm.css"

// let bloop = localStorage.getItem("credentials")

// console.log (bloop.id)
export default class AddAQuarterForm extends Component {
    // Set initial state
    state = {

      usaId: "",
      collectionId: "",
      notes: "",
      userId: "",
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
                collectionId: this.state.collectionId,
                usaId: this.state.usaId,
                notes: this.state.notes,
                userId: localStorage.getItem("credentials").id
            }

            // Create the quarter and redirect user to their collection
            this.props.addQ(item)
            // .then(() => this.props.history.push("/collections"))

    }


    render() {
        return (
            <React.Fragment>

                        <br/>
                        <br/>
                        <br/>
                <form className="AddAQuarterForm" >

                    <div className="form-group">
                        <label htmlFor="collection">Whose collection?</label>
                        <select defaultValue="niece/nephew" name="collection" id="collectionId"
                                onChange={this.handleFieldChange}>
                            <option value="">Select whose collection you want to add a quarter to</option>
                        {
                            this.props.collections.map(e => <option value={e.id} key={e.id} id={e.id}>{e.collectorsName}</option>)
                        }
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="usaId">Add a new State to your collection</label>
                        <select defaultValue="USAs" name="quarter" id="usaId"
                                onChange={this.handleFieldChange}>
                            <option value="">Select which State quarter to add</option>
                        {
                            this.props.usas.map(e => <option value={e.id} key={e.id} id={e.id}>{e.name}</option>)
                        }
                        </select>

                    </div>
                    <div className="form-group">
                        <label htmlFor="notes">notes?</label>
                        <input type="text" required={true}
                            onChange={this.handleFieldChange}
                            id="notes"
                            placeholder="add notes here" />
                    </div>
                    <button type="button" onClick={
                        this.addnewQ
                        // console.log("How do i console log the object that is being captured  the values that user sets from the dropdowns", )

                    }
                    className="btn btn-primary">Submit</button>


                </form>
            </React.Fragment>
        )
    }
}