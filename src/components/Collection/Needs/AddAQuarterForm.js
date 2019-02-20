import React, { Component } from "react"
import "./AddAQuarterForm.css"

let credentials = JSON.parse(localStorage.getItem('credentials'))
// console.log ("bloop", Object.values(credentials)[3])


export default class AddAQuarterForm extends Component {
    // Set initial state
    state = {
        usaId: "",
        notes: "",
        collectionId: this.props.match.params.collectionId,
        userId: Object.values(credentials)[3]
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

    addnewQ = () => {

            const item = {
                collectionId: this.props.match.params.collectionId,
                usaId: parseInt((this.state.usaId), 10),
                notes: this.state.notes,
                userId: Object.values(JSON.parse(localStorage.getItem('credentials')))[3]
    }

        // Create the quarter and redirect user to their collection
        this.props.addQ(item)
        .then(() =>this.props.history.push(`/collection/${this.props.match.params.collectionId}`))
        }


        render() {
            console.log("<Add a Quarter Form /> : this.props =", this.props)
            const collection = this.props.collections.find(a => a.id === parseInt(this.props.match.params.collectionId)) || {}
            return (
                <React.Fragment>

                        <br/>
                        <br/>
                        <br/>
                <form className="AddAQuarterForm" >
                    <div className="form-group">
                        <h4>Add a State Quarter to &nbsp;
                        {collection.collectorsName}'s Collection</h4>
                        <select defaultValue="USAs" name="quarter" id="usaId"
                                onChange={this.handleFieldChange}>
                            <option value="">Select which State quarter to add</option>
                        {
                            this.props.usas.map(e => <option value={e.id} key={e.id} id={e.id}>{e.name}</option>)
                        }
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="notes">Add notes </label>
                        <input type="text" required={true}
                            onChange={this.handleFieldChange}
                            id="notes"
                            placeholder="Add notes here" />
                    </div>
                    <button type="button"
                        className="btn btn-primary"
                        onClick={ () => {
                                this.addnewQ()

                            }}>
                        Submit</button>
                </form>
            </React.Fragment>
        )
    }
}