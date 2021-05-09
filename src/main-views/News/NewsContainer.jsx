import withStyles from '@material-ui/core/styles/withStyles'

import dashboardStyle
    from 'assets/jss/material-dashboard-pro-react/views/dashboardStyle'
import PropTypes from 'prop-types'
import React from 'react'
import newsImage from '../../assets/img/news.png'
import Card from '../../components/Card/Card'
import CardBody from '../../components/Card/CardBody'
import CardHeader from '../../components/Card/CardHeader'
import GridContainer from '../../components/Grid/GridContainer'
import GridItem from '../../components/Grid/GridItem'

class NewsContainer extends React.Component {
    render() {
        const department = localStorage.getItem('department')

        const {classes} = this.props
        return (
            <div>
                <GridContainer>
                    <GridItem xs={12} sm={12} md={2}>
                        <Card product className={classes.cardHover}>
                            <CardHeader
                                className={classes.cardHeaderHover}>
                                <a href="#pablo"
                                   onClick={e => e.preventDefault()}>
                                    <img src={newsImage} alt="..." />
                                </a>
                            </CardHeader>
                            <CardBody>
                                <h4 className={classes.cardProductTitle}>
                                    <a href="#pablo"
                                       onClick={e => e.preventDefault()}>
                                        Новость 1
                                    </a>
                                </h4>
                            </CardBody>
                        </Card>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={2}>
                        <Card product className={classes.cardHover}>
                            <CardHeader
                                className={classes.cardHeaderHover}>
                                <a href="#pablo"
                                   onClick={e => e.preventDefault()}>
                                    <img src={newsImage} alt="..." />
                                </a>
                            </CardHeader>
                            <CardBody>
                                <h4 className={classes.cardProductTitle}>
                                    <a href="#pablo"
                                       onClick={e => e.preventDefault()}>
                                        Новость 2
                                    </a>
                                </h4>
                            </CardBody>
                        </Card>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={2}>
                        <Card product className={classes.cardHover}>
                            <CardHeader
                                className={classes.cardHeaderHover}>
                                <a href="#pablo"
                                   onClick={e => e.preventDefault()}>
                                    <img src={newsImage} alt="..." />
                                </a>
                            </CardHeader>
                            <CardBody>
                                <h4 className={classes.cardProductTitle}>
                                    <a href="#pablo"
                                       onClick={e => e.preventDefault()}>
                                        Новость 3
                                    </a>
                                </h4>
                            </CardBody>
                        </Card>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={2}>
                        <Card product className={classes.cardHover}>
                            <CardHeader
                                className={classes.cardHeaderHover}>
                                <a href="#pablo"
                                   onClick={e => e.preventDefault()}>
                                    <img src={newsImage} alt="..." />
                                </a>
                            </CardHeader>
                            <CardBody>
                                <h4 className={classes.cardProductTitle}>
                                    <a href="#pablo"
                                       onClick={e => e.preventDefault()}>
                                        Новость 4
                                    </a>
                                </h4>
                            </CardBody>
                        </Card>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={2}>
                        <Card product className={classes.cardHover}>
                            <CardHeader
                                className={classes.cardHeaderHover}>
                                <a href="#pablo"
                                   onClick={e => e.preventDefault()}>
                                    <img src={newsImage} alt="..." />
                                </a>
                            </CardHeader>
                            <CardBody>
                                <h4 className={classes.cardProductTitle}>
                                    <a href="#pablo"
                                       onClick={e => e.preventDefault()}>
                                        Новость 5
                                    </a>
                                </h4>
                            </CardBody>
                        </Card>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={2}>
                        <Card product className={classes.cardHover}>
                            <CardHeader
                                className={classes.cardHeaderHover}>
                                <a href="#pablo"
                                   onClick={e => e.preventDefault()}>
                                    <img src={newsImage} alt="..." />
                                </a>
                            </CardHeader>
                            <CardBody>
                                <h4 className={classes.cardProductTitle}>
                                    <a href="#pablo"
                                       onClick={e => e.preventDefault()}>
                                        Новость 6
                                    </a>
                                </h4>
                            </CardBody>
                        </Card>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={2}>
                        <Card product className={classes.cardHover}>
                            <CardHeader
                                className={classes.cardHeaderHover}>
                                <a href="#pablo"
                                   onClick={e => e.preventDefault()}>
                                    <img src={newsImage} alt="..." />
                                </a>
                            </CardHeader>
                            <CardBody>
                                <h4 className={classes.cardProductTitle}>
                                    <a href="#pablo"
                                       onClick={e => e.preventDefault()}>
                                        Новость 7
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

NewsContainer.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(dashboardStyle)(NewsContainer)
