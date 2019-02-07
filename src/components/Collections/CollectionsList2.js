import React, { Component } from "react"
import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"


class CollectionsList2 extends Component {
    render() {

        return (
            <nav className="navbar navbar-light fixed-top light-blue flex-md-nowrap p-0 shadow">
                <ul className="nav nav-pills">
                    <li className="nav-item">
                        <Link className="nav-link" to="/collections/Toby">Toby</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/collections/Nate">Nate</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/collections/Andrew">Andrew</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/collections/Laney">Laney</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/collections/MaryMac">Mary Mac</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/collections/MollyPatrick">Molly Patrick</Link>
                    </li>
                    {/* the below link DOESNOT remove credentials from session storage */}
                    <li className="nav-item">
                        <Link className="nav-link" to="/">LOGOUT</Link>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default CollectionsList2