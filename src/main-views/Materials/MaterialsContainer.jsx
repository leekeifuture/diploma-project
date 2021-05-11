import withStyles from '@material-ui/core/styles/withStyles'

import dashboardStyle
    from 'assets/jss/material-dashboard-pro-react/views/dashboardStyle'
import PropTypes from 'prop-types'
import React from 'react'
import priceImage1 from '../../assets/img/card-1.jpg'
import priceImage2 from '../../assets/img/card-2.jpg'
import priceImage3 from '../../assets/img/card-3.jpg'
import Card from '../../components/Card/Card'
import CardBody from '../../components/Card/CardBody'
import CardHeader from '../../components/Card/CardHeader'
import GridContainer from '../../components/Grid/GridContainer'
import GridItem from '../../components/Grid/GridItem'

class MaterialsContainer extends React.Component {
    render() {
        const {classes} = this.props
        return (
            <div>
                <h3>Материалы кафедры</h3>
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

MaterialsContainer.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(dashboardStyle)(MaterialsContainer)
