import React, { Component } from "react"
import "./AddAQuarterForm.css"

let credentials = JSON.parse(localStorage.getItem('credentials'))
// console.log ("bloop", Object.values(credentials)[3])


export default class AddAQuarterForm extends Component {
    // Set initial state
    state = {

        usaId: "",
        collectionId: "",
        collectionId2: "",
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
                       collectionId: parseInt((this.state.collectionId), 10),
                       collectionId2: this.props.match.params.collectionId,
                       usaId: parseInt((this.state.usaId), 10),
                       notes: this.state.notes,
                       userId: Object.values(JSON.parse(localStorage.getItem('credentials')))[3]
            }

            // Create the quarter and redirect user to their collection
            this.props.addQ(item)


        }


        render() {
            console.log("<Add a Quarter Form /> : this.props =", this.props)
            return (
                <React.Fragment>

                        <br/>
                        <br/>
                        <br/>
                <form className="AddAQuarterForm" >

                    <div className="form-group">
                        <label htmlFor="collection">Select whose collection you want to add a quarter to</label>
                        <select defaultValue="niece/nephew" name="collection" id="collectionId"
                                onChange={this.handleFieldChange}>
                            <option value="">Whose Collection?</option>
                        {
                            this.props.collections.map(e => <option value={e.id} key={e.id} id={e.id}>{e.collectorsName}</option>)
                        }
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="collection2">Whose collection2?</label>
                        <select defaultValue="niece/nephew" name="collection2" id="collectionId2"
                                onChange={this.handleFieldChange}>
                            <option value=""> i want this dropdown populated &lt; dynamically &gt;  </option>
                        {/* {
                            this.props.collections.find( e => e.id === this.props.match.params.collectionId)
                                <option value={this.props.match.params.collectionId} key={e.id}
                                id={e.id}
                                >
                                {e.collectorsName}
                                </option>
                                )
                        } */}
                        <option value={this.props.match.params.collectionId}>is this value dynamic?</option>
                        </select>
                        <p>this.props.match.params.collectionId</p>
                        <p>.find( e => e.id === this.props.match.params.collectionId );</p>

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
                    <button type="button"
                        className="btn btn-primary"
                        onClick={

                                this.addnewQ
                                    // console.log("bloop")
                                // this.props.history.push(`/collection/${collection.id}`)}

                            // >
                        }


                    // {
                        // location.href='http://localhost:3000/collections'
                        // this.props.history.push(`/collection/${collection.id}`)

                    // }


                    >Submit</button>


                </form>
            </React.Fragment>
        )
    }
}