import React, { Component } from "react"
import NavBar from "./../Nav/NavBar";
import './Learn.css'
class List extends Component {

    render() {
        console.log("<Learn /> this.props " , this.props)
        return (
        <React.Fragment>
            <br/>
            <br/>
            <br/>
                <NavBar />
            <br/>
            <br/>
            <h3> &lt; Clickable USA Map component / &gt; goes here </h3>
            <h4> whichever state is clicked, renders the corresponding card and information </h4>

            <div>
                {this.props.usas.map(item => {
                    // console.log(item)
                    return <div className="Card" key={item.id}>
                               <h4><strong> {item.name} </strong></h4> <br/><br/>
                                Date of Statehood: {item.Statehood} <br/>
                                Capital: {item.Capital} <br/>
                                Nicknames: {item.Nicknames} <br/>
                                Motto: {item.Motto} <br/>
                                Flower: {item.Flower} <br/>
                                Bird: {item.Bird} <br/>
                                &lt; IMPORT AN IMAGE OF THE STATE'S BORDERS HERE &gt;
                            </div>
                        })
                }

            </div>
        </React.Fragment>
            )


    }
}

export default List
