import React, { Component } from "react"
// import JokeEditForm from '.jokes/JokeEditForm'
import NavBar from './../nav/NavBar'

export default class JokeDetail extends Component {
    render() {
        /*
            Using the route parameter, find the joke that the
            user clicked on by looking at the `this.props.jokes`
            collection that was passed down from ApplicationViews
        */
        const joke = this.props.jokes.find(a => a.id === parseInt(this.props.match.params.jokeId, 0)) || {}

        return (
            <div>
            <NavBar />
            <section className="joke">
                <div key={joke.id} className="detail-card">
                    <div className="card-body">

                        <h6 className="card-title">name: {joke.setup}</h6>
                        <br/>
                        <h6>details: {joke.punchline} </h6>


                            <br/>

                            <button onClick={() => this.props.history.push(`/jokes/edit/${joke.id}`)}
                            className="card-link">Edit</button>
                    </div>
                </div>
            </section>
            </div>
        )
    }
}