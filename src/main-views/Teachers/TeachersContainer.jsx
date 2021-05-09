import withStyles from '@material-ui/core/styles/withStyles'

import dashboardStyle
    from 'assets/jss/material-dashboard-pro-react/views/dashboardStyle'
import PropTypes from 'prop-types'
import React from 'react'
import priceImage1 from '../../assets/img/faces/marc.jpg'
import Card from '../../components/Card/Card'
import CardBody from '../../components/Card/CardBody'
import CardHeader from '../../components/Card/CardHeader'
import GridContainer from '../../components/Grid/GridContainer'
import GridItem from '../../components/Grid/GridItem'

class MenuContainer extends React.Component {
    render() {
        const department = localStorage.getItem('department')

        const {classes} = this.props
        return (
            <div>
                <h3>Преподаватели кафедры {department}</h3>
                <br />
                <GridContainer>
                    <GridItem xs={12} sm={12} md={2}>
                        <Card product className={classes.cardHover}>
                            <CardHeader
                                className={classes.cardHeaderHover}>
                                <a href="#pablo"
                                   onClick={e => {
                                       e.preventDefault()
                                       window.location.href = 'http://localhost:3000/admin/teacher'
                                   }}>
                                    <img src={priceImage1} alt="..." />
                                </a>
                            </CardHeader>
                            <CardBody>
                                <h4 className={classes.cardProductTitle}>
                                    <a href="#pablo"
                                       onClick={e => {
                                           e.preventDefault()
                                           window.location.href = 'http://localhost:3000/admin/teacher'
                                       }}>
                                        Преподаватели
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

MenuContainer.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(dashboardStyle)(MenuContainer)
