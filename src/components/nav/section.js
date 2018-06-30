import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Dashboard from '../dashboard'
import Settings from '../settings'
import Login from '../login'
import Test from '../ant'
import { Layout } from 'antd';

const { Content } = Layout;

/**
 * Section - Router pages 
 */
const Section = () => {
    return (
        <Content style={{ padding: '0 0', marginTop: 64 }}>
            <Switch>
                <Route exact path="/" component={Login} />
                <Route exact path="/dashboard" component={Dashboard} />
                <Route exact path="/settings" component={Settings} />
                <Route exact path="/ant" component={Test} />
            </Switch>
        </Content>
    )
}

export default Section