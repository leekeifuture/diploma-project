// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
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
            </div>
        )
    }
}

HeaderLinks.propTypes = {
    classes: PropTypes.object.isRequired,
    rtlActive: PropTypes.bool
}

export default withStyles(adminNavbarLinksStyle)(HeaderLinks)
