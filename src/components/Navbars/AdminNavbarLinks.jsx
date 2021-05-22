// @material-ui/core components
import Hidden from '@material-ui/core/Hidden'
import withStyles from '@material-ui/core/styles/withStyles'
import {ExitToApp} from '@material-ui/icons'
import Dashboard from '@material-ui/icons/Dashboard'
import Person from '@material-ui/icons/Person'
// @material-ui/icons
import Search from '@material-ui/icons/Search'
import classNames from 'classnames'
import Button from 'components/CustomButtons/Button.jsx'
// core components
import CustomInput from 'components/CustomInput/CustomInput.jsx'
import PropTypes from 'prop-types'
import React from 'react'
import {NavLink} from 'react-router-dom'
import adminNavbarLinksStyle
    from '../../assets/jss/material-dashboard-pro-react/components/adminNavbarLinksStyle'

// import { Manager, Target, Popper } from "react-popper";

class HeaderLinks extends React.Component {
    constructor() {
        super()
        this.state = {
            open: false,
            search: ''
        }
        this.getExitButton = this.getExitButton.bind(this)
    }

    handleClick = () => {
        this.setState({open: !this.state.open})
    }
    handleClose = () => {
        this.setState({open: false})
    }

    getExitButton = (classes) => {
        if (this.props.authenticated) {
            return (
                <NavLink to={'/ibstu/menu'}>
                    <Button
                        onClick={() => this.props.keycloak.logout()}
                        color="rose"
                        simple
                        aria-label="User menu"
                        justIcon
                        className={classes.buttonLink}
                    >
                        <ExitToApp
                            className={classes.headerLinksSvg}
                        />
                        <Hidden mdUp implementation="css">
            <span className={classes.linkText}>
              {'Выход'}
            </span>
                        </Hidden>
                    </Button>
                </NavLink>
            )
        }
        return <></>
    }

    getSearchElement(classes, searchButton) {
        if (!window.location.href.includes('multi-search')) {
            return (
                <>
                    <CustomInput
                        formControlProps={{
                            className: classes.top + ' ' + classes.search
                        }}
                        inputProps={{
                            onChange: e => this.setState({search: e.target.value}),
                            placeholder: 'Поиск',
                            inputProps: {
                                'aria-label': 'Поиск',
                                className: classes.searchInput
                            }
                        }}
                    />
                    <NavLink to={'/ibstu/multi-search'}>
                        <Button
                            onClick={() => localStorage.setItem('ms', this.state.search)}
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
                    </NavLink>
                </>
            )
        }
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
                {this.getSearchElement(classes, searchButton)}
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
                <NavLink to={'/auth-ibstu/start-user'}>
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
                {this.getExitButton(classes)}
            </div>
        )
    }
}

HeaderLinks.propTypes = {
    classes: PropTypes.object.isRequired,
    rtlActive: PropTypes.bool
}

export default withStyles(adminNavbarLinksStyle)(HeaderLinks)
