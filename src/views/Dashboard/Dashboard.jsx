// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
// @material-ui/icons
// import ContentCopy from "@material-ui/icons/ContentCopy";
// import InfoOutline from "@material-ui/icons/InfoOutline";
import priceImage2 from 'assets/img/card-2.jpg'
import priceImage1 from 'assets/img/card-1.jpg'
import priceImage3 from 'assets/img/card-3.jpg'

import dashboardStyle
    from 'assets/jss/material-dashboard-pro-react/views/dashboardStyle'
import Card from 'components/Card/Card.jsx'
import CardBody from 'components/Card/CardBody.jsx'
import CardHeader from 'components/Card/CardHeader.jsx'
// core components
import GridContainer from 'components/Grid/GridContainer.jsx'
import GridItem from 'components/Grid/GridItem.jsx'
import PropTypes from 'prop-types'
import React from 'react'
import {facultiesToReadable} from '../../constants'
// react plugin for creating charts
// react plugin for creating vector maps

const us_flag = require('assets/img/flags/US.png')
const de_flag = require('assets/img/flags/DE.png')
const au_flag = require('assets/img/flags/AU.png')
const gb_flag = require('assets/img/flags/GB.png')
const ro_flag = require('assets/img/flags/RO.png')
const br_flag = require('assets/img/flags/BR.png')

var mapData = {
    AU: 760,
    BR: 550,
    CA: 120,
    DE: 1300,
    FR: 540,
    GB: 690,
    GE: 200,
    IN: 200,
    RO: 600,
    RU: 300,
    US: 2920
}

class Dashboard extends React.Component {
    state = {
        value: 0
    }
    handleChange = (event, value) => {
        this.setState({value})
    }
    handleChangeIndex = index => {
        this.setState({value: index})
    }

    render() {
        const chair = localStorage.getItem('chair')

        const {classes} = this.props
        return (
            <div>
                <h3>Добро пожаловать на кафедру {chair}</h3>
                <br />
                <GridContainer>
                    <GridItem xs={12} sm={12} md={4}>
                        <Card product className={classes.cardHover}>
                            <CardHeader image
                                        className={classes.cardHeaderHover}>
                                <a href="#pablo"
                                   onClick={e => e.preventDefault()}>
                                    <img src={priceImage1} alt="..." />
                                </a>
                            </CardHeader>
                            <CardBody>
                                <h4 className={classes.cardProductTitle}>
                                    <a href="#pablo"
                                       onClick={e => e.preventDefault()}>
                                        Преподаватели
                                    </a>
                                </h4>
                            </CardBody>
                        </Card>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                        <Card product className={classes.cardHover}>
                            <CardHeader image
                                        className={classes.cardHeaderHover}>
                                <a href="#pablo"
                                   onClick={e => e.preventDefault()}>
                                    <img src={priceImage2} alt="..." />
                                </a>
                            </CardHeader>
                            <CardBody>
                                <h4 className={classes.cardProductTitle}>
                                    <a href="#pablo"
                                       onClick={e => e.preventDefault()}>
                                        Новости
                                    </a>
                                </h4>
                            </CardBody>
                        </Card>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                        <Card product className={classes.cardHover}>
                            <CardHeader image
                                        className={classes.cardHeaderHover}>
                                <a href="#pablo"
                                   onClick={e => e.preventDefault()}>
                                    <img src={priceImage3} alt="..." />
                                </a>
                            </CardHeader>
                            <CardBody>
                                <h4 className={classes.cardProductTitle}>
                                    <a href="#pablo"
                                       onClick={e => e.preventDefault()}>
                                        Материалы
                                    </a>
                                </h4>
                            </CardBody>
                        </Card>
                    </GridItem>
                </GridContainer>
            </div>
        )
    }
}

Dashboard.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(dashboardStyle)(Dashboard)
