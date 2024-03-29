import 'assets/css/custom.css'
import 'assets/scss/material-dashboard-pro-react.scss?v=1.5.0'
import {createBrowserHistory} from 'history'
import AdminLayout from 'layouts/Admin.jsx'
import AdminAuthLayout from 'layouts/AdminAuth.jsx'
import React from 'react'
import ReactDOM from 'react-dom'
import {Redirect, Route, Router, Switch} from 'react-router-dom'

const hist = createBrowserHistory()

ReactDOM.render(
    <Router history={hist}>
        <Switch>
            <Route path="/ibstu" component={AdminLayout} />
            <Route path="/auth-ibstu" component={AdminAuthLayout} />
            <Redirect from="/" to="/ibstu/start" />
        </Switch>
    </Router>,
    document.getElementById('root')
)
