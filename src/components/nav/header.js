import React from 'react'
import { Link } from 'react-router-dom'
import { Menu, Icon } from 'antd';



class Header extends React.Component {

    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (

            <Menu
                onClick={this.handleClick}
                selectedKeys={[this.state.current]}
                mode="horizontal"
            >
                <Menu.Item key="dashboard">
                    <Link to="/dashboard"><Icon type="clock-circle-o" />Dashboard</Link>
                </Menu.Item>
                <Menu.Item key="settings">
                    <Link to="/settings"><Icon type="setting" />Settings</Link>
                </Menu.Item>
                <Menu.Item key="profile">
                    <Link to="/profile"><Icon type="user" />Profile</Link>
                </Menu.Item>
            </Menu >
        );

    }
}


export default Header;