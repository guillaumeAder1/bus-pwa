import React from 'react'
import { Link } from 'react-router-dom'
// import './headercss.css'

import { Menu, Icon } from 'antd';


/**
 * Navmenu - Router Link to section 
 */
class Navmenu extends React.Component {


    render() {
        return (
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>

                <Menu.Item key="1">
                    <Link to="/dashboard">
                        <Icon type="clock-circle-o" />
                        <span>Dashboard</span>
                    </Link>
                </Menu.Item>

                <Menu.Item key="2">
                    <Link to="/settings">
                        <Icon type="setting" />
                        <span>Settings</span>
                    </Link>
                </Menu.Item>

                <Menu.Item key="3">
                    <Link to="/profile">
                        <Icon type="user" />
                        <span>Profile</span>
                    </Link>

                </Menu.Item>

            </Menu>
        );

    }
}


export default Navmenu;