import withStyles from '@material-ui/core/styles/withStyles'

import dashboardStyle
    from 'assets/jss/material-dashboard-pro-react/views/dashboardStyle'
import PropTypes from 'prop-types'
import React from 'react'
import Dashboard from '../views/Dashboard/Dashboard'

class MenuContainer extends React.Component {
    render() {
        return (
            <Dashboard />
        )
    }
}

MenuContainer.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(dashboardStyle)(MenuContainer)
