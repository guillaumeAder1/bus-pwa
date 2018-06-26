import React from 'react'
import { Link } from 'react-router-dom'
import '../../org.css'
import Login from '../login'


import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;


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
                    <Icon type="clock-circle-o" />Dashboard
                </Menu.Item>
                <Menu.Item key="settings">
                    <Icon type="setting" />Settings
                </Menu.Item>
                <Menu.Item key="profile">
                    <Icon type="user" />Profile
                </Menu.Item>
            </Menu >
        );

    }
}


export default Header;