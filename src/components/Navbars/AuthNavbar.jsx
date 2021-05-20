import AppBar from '@material-ui/core/AppBar'
import Drawer from '@material-ui/core/Drawer'
import Hidden from '@material-ui/core/Hidden'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
import Toolbar from '@material-ui/core/Toolbar'
// @material-ui/icons
import Dashboard from '@material-ui/icons/Dashboard'
import Menu from '@material-ui/icons/Menu'

import authNavbarStyle
    from 'assets/jss/material-dashboard-pro-react/components/authNavbarStyle.jsx'
import cx from 'classnames'
// core components
import Button from 'components/CustomButtons/Button'
import PropTypes from 'prop-types'
import React from 'react'
import {NavLink} from 'react-router-dom'

class AuthNavbar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false
        }
    }

    handleDrawerToggle = () => {
        this.setState({open: !this.state.open})
    }

    // verifies if routeName is the one active (in browser input)
    activeRoute(routeName) {
        return this.props.location.pathname.indexOf(routeName) > -1 ? true : false
    }

    componentDidUpdate(e) {
        if (e.history.location.pathname !== e.location.pathname) {
            this.setState({open: false})
        }
    }

    render() {
        const {classes, color, brandText} = this.props
        const appBarClasses = cx({
            [' ' + classes[color]]: color
        })
        var list = (
            <List className={classes.list}>
                <ListItem className={classes.listItem}>
                    <NavLink to={'/auth-ibstu/start-user'}
                             className={classes.navLink}>
                        <Dashboard className={classes.listItemIcon} />
                        <ListItemText
                            primary={'Главная страница'}
                            disableTypography={true}
                            className={classes.listItemText}
                        />
                    </NavLink>
                </ListItem>
            </List>
        )
        return (
            <AppBar position="static"
                    className={classes.appBar + appBarClasses}>
                <Toolbar className={classes.container}>
                    <Hidden smDown>
                        <div className={classes.flex}>
                            <Button href="#" className={classes.title}
                                    color="transparent">
                                {brandText}
                            </Button>
                        </div>
                    </Hidden>
                    <Hidden mdUp>
                        <div className={classes.flex}>
                            <Button href="#" className={classes.title}
                                    color="transparent">
                                Авторизация
                            </Button>
                        </div>
                    </Hidden>
                    <Hidden smDown>{list}</Hidden>
                    <Hidden mdUp>
                        <Button
                            className={classes.sidebarButton}
                            color="transparent"
                            justIcon
                            aria-label="open drawer"
                            onClick={this.handleDrawerToggle}
                        >
                            <Menu />
                        </Button>
                    </Hidden>
                    <Hidden mdUp>
                        <Hidden mdUp>
                            <Drawer
                                variant="temporary"
                                anchor={'right'}
                                open={this.state.open}
                                classes={{
                                    paper: classes.drawerPaper
                                }}
                                onClose={this.handleDrawerToggle}
                                ModalProps={{
                                    keepMounted: true // Better open performance on mobile.
                                }}
                            >
                                {list}
                            </Drawer>
                        </Hidden>
                    </Hidden>
                </Toolbar>
            </AppBar>
        )
    }
}

AuthNavbar.propTypes = {
    classes: PropTypes.object.isRequired,
    color: PropTypes.oneOf(['primary', 'info', 'success', 'warning', 'danger']),
    brandText: PropTypes.string
}

export default withStyles(authNavbarStyle)(AuthNavbar)
