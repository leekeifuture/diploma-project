import 'assets/scss/material-dashboard-pro-react.scss?v=1.5.0'
import {createBrowserHistory} from 'history'
import AdminLayout from 'layouts/Admin.jsx'

import AuthLayout from 'layouts/Auth.jsx'
import RtlLayout from 'layouts/RTL.jsx'
import React from 'react'
import ReactDOM from 'react-dom'
import {Redirect, Route, Router, Switch} from 'react-router-dom'
import MaterialsContainer from './main-views/Materials/MaterialsContainer'
import NewsContainer from './main-views/News/NewsContainer'
import TeachersContainer from './main-views/Teachers/TeachersContainer'
import Menu from './views/Menu/Menu'

const hist = createBrowserHistory()

ReactDOM.render(
    <Router history={hist}>
        <Switch>
            <Route path="/rtl" component={RtlLayout} />
            <Route path="/auth" component={AuthLayout} />
            <Route path="/admin" component={AdminLayout} />

            <Route path="/menu" component={Menu} />
            <Route path="/teachers" component={TeachersContainer} />
            <Route path="/materials" component={MaterialsContainer} />
            <Route path="/news" component={NewsContainer} />

            <Redirect from="/" to="/admin/start" />
        </Switch>
    </Router>,
    document.getElementById('root')
)
