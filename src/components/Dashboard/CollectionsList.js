import React, { Component } from 'react'

class CollectionsList extends Component {
    render() {
        console.log(this.props.collections)


        return (
            <div>
            {/* <button id="AddMessage" onClick={() => {console.log("add button clicked")
                            // this.props.addMessage()
                               this.props.history.push("/messages/new")
                            }}>Add a new message</button> */}
            <section className="collections">
            {/* <h2>View Collection for : </h2> */}
            {
                this.props.collections.map(collection =>
                    <div key={collection.id} className="collection" >
                        <br/>
                        <button className="btn btn-primary"  id={collection.id} onClick={() =>

                            {
                            this.props.history.push(`/collection/${collection.id}`)
                                // console.log(`edit button # ${collection.id} clicked`)
                            }}
                            >
                            {collection.collectorsName}  </button>

                        <br/>
                    </div>

                )
            }
            </section>
             </div>
        )
    }
}

export default CollectionsList