import React, { Component } from "react"
import NavBar from "./../Nav/NavBar";

class List extends Component {

    render() {
        console.log("<Learn /> this.props " , this.props)
        return (
        <React.Fragment>
            <br/>
            <br/>
            <br/>
                <NavBar />


            <div>
                {this.props.usas.map(item => {
                    // console.log(item)
                    return <div className="Card" key={item.id}>
                                {item.name} <br/><br/>
                                Date of Statehood: {item.Statehood} <br/>
                                Capital: {item.Capital} <br/>
                                Nicknames: {item.Nicknames} <br/>
                                Motto: {item.Motto} <br/>
                                Flower: {item.Flower} <br/>
                                Bird: {item.Bird} <br/>
                                </div>
                        })
                }

            </div>
        </React.Fragment>
            )


    }
}

export default List
