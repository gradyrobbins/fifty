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
            <h2>Collection for : </h2>
            {
                this.props.collections.map(collection =>
                    <div className="message" key={collection.id}>
                        <br/>
                        <a href=""> {collection.collectorsName} </a>
                        {/* <strong>{message.person_sending_the_message} </strong> says: {message.message}
                        <br />
                        <button className="btn btn-primary" id={message.id} onClick={() => {console.log(`edit button # ${message.id} clicked`)}}> Edit this message </button>
                        <br />
                        <button className="btn btn-primary" onClick={() => {
                            console.log(`delete button # ${message.id} clicked`)
                            this.props.deleteMessage(message.id)
                            // this.props.stickMessagesOnDom()
                            }}> Delete this message </button> */}
                    </div>

                )
            }
            </section>
             </div>
        )
    }
}

export default CollectionsList