import React, { Component } from "react"
import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"

class NavBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-light fixed-top light-blue flex-md-nowrap p-0 shadow">
                <ul className="nav nav-pills">

                    <li className="nav-item">
                        <Link className="nav-link" to="/login">Login</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/learn">Learn (coming soon) </Link>
                    </li>
                    {/* <li className="nav-item">
                        <Link className="nav-link" to="/collections">Dashboard</Link>
                    </li> */}
                    {/* <li className="nav-item">
                        <Link className="nav-link" to="/">Logout</Link>
                    </li> */}

                </ul>
            </nav>
        )
    }
}

export default NavBar