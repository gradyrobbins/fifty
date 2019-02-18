import React, { Component } from "react"
// import NavBar from '.'
// the edit button will live on HasCard

export default class QEditForm extends Component {

    state = {

    }
// update state upon edits to fields
handleFieldChange = evt => {
    const stateToChange = {}
    stateToChange[evt.target.id] = evt.target.value
    this.setState(stateToChange)
}

componentDidMount() {
    // console.log(this.props)
    const joke = this.props.jokes.find(e => e.id === parseInt(this.props.match.params.jokeId))
    const oldJoke = {...joke}
    this.setState(oldJoke);
}
constructNewJoke = (evt) => {
    evt.preventDefault()
    // console.log("this.state", this.state)
    let newJoke = {
        setup: this.state.setup,
        punchline: this.state.punchline,
        id: this.state.id
    }
    // console.log("newjoke", newJoke)
    this.props.editJoke(newJoke.id, newJoke)
    .then(() => this.props.history.push("/jokes"))
}
render() {
    return (
        <div>
        {/* <NavBar /> */}
        <React.Fragment>
            <form className="eventForm">
                <div className="form-group">
                    <label htmlFor="setup">edit notes</label>
                    <input type="text" required={true}
                        onChange={this.handleFieldChange}
                        id="setup"
                        placeholder={this.props.setup} />
                </div>
                <div className="form-group">
                    <label htmlFor="punchline">edit details </label>
                    <input type="text" required={true}
                        onChange={this.handleFieldChange}
                        id="punchline"
                        placeholder={this.props.punchline} />
                </div>
                <button type="submit" onClick={this.constructNewJoke}
                className="btn btn-primary">Submit</button>


            </form>
        </React.Fragment>
        </div>
    )
}
}