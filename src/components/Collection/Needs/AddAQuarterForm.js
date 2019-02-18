import React, { Component } from "react"
import "./AddAQuarterForm.css"

let credentials = JSON.parse(localStorage.getItem('credentials'))
// console.log ("bloop", Object.values(credentials)[3])


export default class AddAQuarterForm extends Component {
    // Set initial state
    state = {

        usaId: "",
        collectionId: this.props.match.params.collectionId,
        // collectionId2: "",
        notes: "",
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

    addnewQ = evt => {
            evt.preventDefault()

            const item = {
                // collectionId: parseInt((this.state.collectionId), 10),
                // collectionId: this.props.match.params.collectionId,
                usaId: parseInt((this.state.usaId), 10),
                notes: this.state.notes,
                // userId: Object.values(JSON.parse(localStorage.getItem('credentials')))[3]
    }

        // Create the quarter and redirect user to their collection
        this.props.addQ(item)
        // .then(() =>this.props.history.push(`/collections`))
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

                    {/* <div className="form-group">
                        <label htmlFor="collection">Select whose collection you want to add a quarter to</label>
                        <select defaultValue="niece/nephew" name="collection" id="collectionId"
                                onChange={this.handleFieldChange}>
                            <option value="">Whose Collection?</option>
                        {
                            this.props.collections.map(e => <option value={e.id} key={e.id} id={e.id}>{e.collectorsName}</option>)
                        }
                        </select>
                    </div> */}

                    <div className="form-group">
                        {/* <label htmlFor="collection2">
                        add a quarter to &nbsp;
                        {collection.collectorsName}'s Collection
                        </label> */}
                        <h4>Add a State Quarter to &nbsp;
                        {collection.collectorsName}'s Collection</h4>
                        {/* <select defaultValue="niece/nephew" name="collection2" id="collectionId2"
                                onChange={this.handleFieldChange}
                                >
                            <option value=""> i want this dropdown populated &lt; dynamically &gt;  </option> */}
                        {/* {
                            this.props.collections.find( e => e.id === this.props.match.params.collectionId)
                                <option value={this.props.match.params.collectionId} key={e.id}
                                id={e.id}
                                >
                                {e.collectorsName}
                                </option>
                                )
                        } */}
                        {/* <option value={this.props.match.params.collectionId}> {collection.collectorsName}</option>
                        </select> */}
                        {/* <p>this value reflects this/props/match/params regardless of the first select box's choice</p>
                        <p>this.props.match.params.collectionId</p>
                        <p>.find( e => e.id === this.props.match.params.collectionId );</p> */}

                    </div>

                    <div className="form-group">
                        {/* <label htmlFor="usaId">Add a new State Quarter to {collection.collectorsName}'s Collection</label> */}
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
                    <button type="button"
                        className="btn btn-primary"
                        onClick={ () => {
                            // console.log("bloop")
                                this.addnewQ()

                            }}>
                        Submit</button>
                </form>
            </React.Fragment>
        )
    }
}