// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
// @material-ui/icons
// import ContentCopy from "@material-ui/icons/ContentCopy";
// import InfoOutline from "@material-ui/icons/InfoOutline";
import priceImage1 from 'assets/img/card-1.jpg'
import priceImage2 from 'assets/img/card-2.jpg'
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

class Menu extends React.Component {
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
                                   onClick={e => {
                                       e.preventDefault()
                                       window.location.href = 'http://localhost:3000/admin/teachers'
                                   }}>
                                    <img src={priceImage1} alt="..." />
                                </a>
                            </CardHeader>
                            <CardBody>
                                <h4 className={classes.cardProductTitle}>
                                    <a href="#pablo"
                                       onClick={e => {
                                           e.preventDefault()
                                           window.location.href = 'http://localhost:3000/admin/teachers'
                                       }}>
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
                                   onClick={e => {
                                       e.preventDefault()
                                       window.location.href = 'http://localhost:3000/admin/news'
                                   }}>
                                    <img src={priceImage2} alt="..." />
                                </a>
                            </CardHeader>
                            <CardBody>
                                <h4 className={classes.cardProductTitle}>
                                    <a href="#pablo"
                                       onClick={e => {
                                           e.preventDefault()
                                           window.location.href = 'http://localhost:3000/admin/news'
                                       }}>
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
                                   onClick={e => {
                                       e.preventDefault()
                                       window.location.href = 'http://localhost:3000/admin/materials'
                                   }}>
                                    <img src={priceImage3} alt="..." />
                                </a>
                            </CardHeader>
                            <CardBody>
                                <h4 className={classes.cardProductTitle}>
                                    <a href="#pablo"
                                       onClick={e => {
                                           e.preventDefault()
                                           window.location.href = 'http://localhost:3000/admin/materials'
                                       }}>
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

Menu.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(dashboardStyle)(Menu)
