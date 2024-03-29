import withStyles from '@material-ui/core/styles/withStyles'

import dashboardStyle
    from 'assets/jss/material-dashboard-pro-react/views/dashboardStyle'
import PropTypes from 'prop-types'
import React from 'react'
import Wizard from '../views/Forms/Start'

class StartContainer extends React.Component {
    render() {
        return (
            <Wizard />
        )
    }
}

StartContainer.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(dashboardStyle)(StartContainer)
