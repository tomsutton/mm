
import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import App from './App'
const AppRouter = () => (
        <Router>
            <Switch>
                <Route path={"/"} component={App}/>
            </Switch>
        </Router>)
export default AppRouter
