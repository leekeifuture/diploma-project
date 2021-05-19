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
import {NavLink} from 'react-router-dom'
import Button from '../../components/CustomButtons/Button'

class Menu extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    handleChange = (event, value) => {
        this.setState({value})
    }
    handleChangeIndex = index => {
        this.setState({value: index})
    }

    render() {
        const department = localStorage.getItem('departmentName')
            .replace('Кафедра', 'кафедру')

        const {classes} = this.props
        return (
            <div>
                <GridContainer>
                    <GridItem xs={12} sm={12} md={10}>
                        <h3>Добро пожаловать на {department}</h3>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={1}>
                        <NavLink to={'/ibstu/start'}>
                            <Button
                                round
                                color="rose"
                            >
                                Изменить кафедру
                            </Button>
                        </NavLink>
                    </GridItem>
                </GridContainer>
                <br />
                <GridContainer>
                    <GridItem xs={12} sm={12} md={4}>
                        <Card product className={classes.cardHover}>
                            <CardHeader image
                                        className={classes.cardHeaderHover}>
                                <a href=""
                                   onClick={e => {
                                       e.preventDefault()
                                       window.location.href = 'http://localhost:3000/ibstu/teachers'
                                   }}>
                                    <img src={priceImage1} alt="..." />
                                </a>
                            </CardHeader>
                            <CardBody>
                                <h4 className={classes.cardProductTitle}>
                                    <a href=""
                                       onClick={e => {
                                           e.preventDefault()
                                           window.location.href = 'http://localhost:3000/ibstu/teachers'
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
                                <a href=""
                                   onClick={e => {
                                       e.preventDefault()
                                       window.location.href = 'http://localhost:3000/ibstu/news'
                                   }}>
                                    <img src={priceImage2} alt="..." />
                                </a>
                            </CardHeader>
                            <CardBody>
                                <h4 className={classes.cardProductTitle}>
                                    <a href=""
                                       onClick={e => {
                                           e.preventDefault()
                                           window.location.href = 'http://localhost:3000/ibstu/news'
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
                                <a href=""
                                   onClick={e => {
                                       e.preventDefault()
                                       window.location.href = 'http://localhost:3000/ibstu/materials'
                                   }}>
                                    <img src={priceImage3} alt="..." />
                                </a>
                            </CardHeader>
                            <CardBody>
                                <h4 className={classes.cardProductTitle}>
                                    <a href=""
                                       onClick={e => {
                                           e.preventDefault()
                                           window.location.href = 'http://localhost:3000/ibstu/materials'
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
