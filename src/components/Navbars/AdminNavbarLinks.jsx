// @material-ui/core components
import Hidden from '@material-ui/core/Hidden'
import withStyles from '@material-ui/core/styles/withStyles'
import Dashboard from '@material-ui/icons/Dashboard'
import Person from '@material-ui/icons/Person'
// @material-ui/icons
import Search from '@material-ui/icons/Search'

import adminNavbarLinksStyle
    from 'assets/jss/material-dashboard-pro-react/components/adminNavbarLinksStyle.jsx'
import classNames from 'classnames'
import Button from 'components/CustomButtons/Button.jsx'
// core components
import CustomInput from 'components/CustomInput/CustomInput.jsx'
import PropTypes from 'prop-types'
import React from 'react'
import {NavLink} from 'react-router-dom'

// import { Manager, Target, Popper } from "react-popper";

class HeaderLinks extends React.Component {
    state = {
        open: false
    }
    handleClick = () => {
        this.setState({open: !this.state.open})
    }
    handleClose = () => {
        this.setState({open: false})
    }

    render() {
        const {classes, rtlActive} = this.props
        const {open} = this.state
        const searchButton =
            classes.top +
            ' ' +
            classes.searchButton +
            ' ' +
            classNames({
                [classes.searchRTL]: rtlActive
            })
        const dropdownItem = classNames(
            classes.dropdownItem,
            classes.primaryHover,
            {[classes.dropdownItemRTL]: rtlActive}
        )
        const wrapper = classNames({
            [classes.wrapperRTL]: rtlActive
        })
        const managerClasses = classNames({
            [classes.managerClasses]: true
        })
        return (
            <div className={wrapper}>
                <CustomInput
                    rtlActive={rtlActive}
                    formControlProps={{
                        className: classes.top + ' ' + classes.search
                    }}
                    inputProps={{
                        placeholder: rtlActive ? 'بحث' : 'Search',
                        inputProps: {
                            'aria-label': rtlActive ? 'بحث' : 'Search',
                            className: classes.searchInput
                        }
                    }}
                />
                <Button
                    color="white"
                    aria-label="edit"
                    justIcon
                    round
                    className={searchButton}
                >
                    <Search
                        className={classes.headerLinksSvg + ' ' + classes.searchIcon}
                    />
                </Button>
                <NavLink to={'/ibstu/menu'}>
                    <Button
                        color="rose"
                        simple
                        aria-label="Menu"
                        justIcon
                        className={classes.buttonLink}
                    >
                        <Dashboard
                            className={
                                classes.headerLinksSvg +
                                ' ' +
                                (rtlActive
                                    ? classes.links + ' ' + classes.linksRTL
                                    : classes.links)
                            }
                        />
                        <Hidden mdUp implementation="css">
            <span className={classes.linkText}>
              {rtlActive ? 'لوحة القيادة' : 'Dashboard'}
            </span>
                        </Hidden>
                    </Button>
                </NavLink>
                <NavLink to={'/ibstu/start-user'}>
                    <Button
                        color="rose"
                        simple
                        aria-label="User menu"
                        justIcon
                        className={classes.buttonLink}
                    >
                        <Person
                            className={classes.headerLinksSvg}
                        />
                        <Hidden mdUp implementation="css">
            <span className={classes.linkText}>
              {'Профиль'}
            </span>
                        </Hidden>
                    </Button>
                </NavLink>
            </div>
        )
    }
}

HeaderLinks.propTypes = {
    classes: PropTypes.object.isRequired,
    rtlActive: PropTypes.bool
}

export default withStyles(adminNavbarLinksStyle)(HeaderLinks)
