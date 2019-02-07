import React, { Component } from 'react'

class HasCard extends Component {
    render() {
        console.log("this.props", this.props.collections)
        // console.log("this.props.getASpecificCollection", this.props.getASpecificCollection)


        return (
            <div>
            {/* <button id="AddMessage" onClick={() => {console.log("add button clicked")
                            // this.props.addMessage()
                               this.props.history.push("/messages/new")
                            }}>Add a new message</button> */}
            <section className="collections">
            <h2>Has: </h2>
            {
                this.props.collections.map(collection =>

                    <div key={collection.id} className="collection" >
                        <p>Notes: {collection.notes}</p>
                    </div>

                )
            }
            </section>
             </div>
        )
    }
}

export default HasCard