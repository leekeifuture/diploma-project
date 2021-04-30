import withStyles from '@material-ui/core/styles/withStyles'

import dashboardStyle
    from 'assets/jss/material-dashboard-pro-react/views/dashboardStyle'
import PropTypes from 'prop-types'
import React from 'react'
import UserProfile from '../../views/Pages/UserProfile'

class Teacher extends React.Component {
    render() {
        return (
            <UserProfile />
        )
    }
}

Teacher.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(dashboardStyle)(Teacher)
