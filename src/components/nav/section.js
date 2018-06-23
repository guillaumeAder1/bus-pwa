import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Dashboard from '../dashboard'
import Settings from '../settings'
import Login from '../login'

const Section = () => {
    return (
        <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/settings" component={Settings} />
        </Switch>
    )
}

export default Section