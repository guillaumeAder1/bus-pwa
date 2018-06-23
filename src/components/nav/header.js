import React from 'react'
import { Link } from 'react-router-dom'
import '../../org.css'
import Login from '../login'

class Header extends React.Component {

    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (

            <div className="layout-wrapper">
                <div id="layout-topbar">
                    <a href="" className="menu-button"></a>
                    <a href="" className="menu-logo">
                        <img />

                    </a>
                    <ul className="topbar-menu">
                        <li><Link to="/dashboard"> Dashboard </Link></li>
                        <li><Link to="/settings"> Settings </Link></li>
                        <Login />

                    </ul>
                </div>
            </div>

        );
    }
}


export default Header;