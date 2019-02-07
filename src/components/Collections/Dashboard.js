import React, { Component } from "react"
import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"


class Dashboard extends Component {
    render() {
        return (
            <nav className="navbar navbar-dark bg-dark fixed-top flex-md-nowrap">
                {/* <p>WELCOME, *getlocalStorage.name*</p> */}
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
                        <Link className="nav-link" to="/collections/Mary_Mac">Mary Mac</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/collections/Molly_Patrick">Molly Patrick</Link>
                    </li>

                    <button onClick={() => {
                    localStorage.clear("credentials")
                    document.location.href='http://localhost:3000'
                }}
                    className="logoutButton">LOG OUT</button>
                </ul>
            </nav>
        )
    }
}

export default Dashboard