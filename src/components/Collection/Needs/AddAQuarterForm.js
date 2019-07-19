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
    //create a new object
    const item = {
        collectionId: this.props.match.params.collectionId,
        usaId: parseInt((this.state.usaId), 10),
        notes: this.state.notes,
        userId: Object.values(JSON.parse(localStorage.getItem('credentials')))[3]
    }
    // use the addQ() and redirect the user to that same collection so they can verify that it was added
    this.props.addQ(item)
    .then(() =>this.props.history.push(`/collection/${this.props.match.params.collectionId}`))
        }

    // the below function found at https://www.sitepoint.com/sort-an-array-of-objects-in-javascript/
    // used to alphabetize the dropdown list coming from this.props.usas
    // function for dynamic sorting
    compareValues = (key, order='asc') => {
    return function(a, b) {
      if(!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
        // property doesn't exist on either object
        return 0;
      }

      const varA = (typeof a[key] === 'string') ?
        a[key].toUpperCase() : a[key];
      const varB = (typeof b[key] === 'string') ?
        b[key].toUpperCase() : b[key];

      let comparison = 0;
      if (varA > varB) {
        comparison = 1;
      } else if (varA < varB) {
        comparison = -1;
      }
      return (
        (order == 'desc') ? (comparison * -1) : comparison
      );
    };
  }



  render() {
      // console.log("<Add a Quarter Form /> : this.props =", this.props)
      const collection = this.props.collections.find(a => a.id === parseInt(this.props.match.params.collectionId)) || {}


    //   const ABCorder56 = this.props.usa.sort(this.compareValues('name'));
    //   console.log("ABC order: ", ABCorder56)

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
                    this.props.usas.sort(this.compareValues('name')).map(e => <option value={e.id} key={e.id} id={e.id}>{e.name}</option>)
                }
                </select>
            </div>

            <div className="form-group">
                <label htmlFor="notes">Add notes </label>
                <input type="text" required={true}
                    onChange={this.handleFieldChange}
                    id="notes"
                    placeholder=" Notes " />
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