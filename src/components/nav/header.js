import React from 'react'
import { Link } from 'react-router-dom'
// import './headercss.css'

import { Menu, Icon } from 'antd';


/**
 * Navmenu - Router Link to section 
 */
class Navmenu extends React.Component {

    state = {
        selected: '1'
    }
    constructor() {
        super()
    }

    select(e) {
        this.setState({ selected: e })
        this.props.onSelected()
    }

    render() {
        return (
            <Menu theme="dark" mode="inline" defaultSelectedKeys={[this.state.selected]}>

                <Menu.Item key="1" onClick={() => this.select('1')} >
                    <Link to="/dashboard">
                        <Icon type="clock-circle-o" />
                        <span>Dashboard</span>
                    </Link>
                </Menu.Item>

                <Menu.Item key="2" onClick={() => this.select('2')}>
                    <Link to="/settings">
                        <Icon type="setting" />
                        <span>Settings</span>
                    </Link>
                </Menu.Item>

                <Menu.Item key="3" onClick={() => this.select('3')}>
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