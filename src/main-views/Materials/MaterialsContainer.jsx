import withStyles from '@material-ui/core/styles/withStyles'

import dashboardStyle
    from 'assets/jss/material-dashboard-pro-react/views/dashboardStyle'
import PropTypes from 'prop-types'
import React from 'react'
import {ibstu} from '../../api/ibstu-api'
import materialsImage from '../../assets/img/material.png'
import Card from '../../components/Card/Card'
import CardBody from '../../components/Card/CardBody'
import CardHeader from '../../components/Card/CardHeader'
import GridContainer from '../../components/Grid/GridContainer'
import GridItem from '../../components/Grid/GridItem'

class MaterialsContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            materials: null,
            materialsContent: []
        }
    }

    componentDidMount() {
        const departmentId = localStorage.getItem('departmentId')
        ibstu.getMaterials(departmentId).then(materials => {
                this.setState({materialsContent: materials.content})
                this.setState({materials})
            }, error => {
                console.error(error)
            }
        )
    }

    render() {
        const department = localStorage.getItem('departmentName')
            .replace('Кафедра', 'кафедры')

        const {classes} = this.props
        return (
            <div>
                <h3>Материалы {department}</h3>
                <GridContainer>
                    {this.state.materialsContent.map((material, index) => (
                        <GridItem key={index} xs={12} sm={12} md={2}>
                            <Card product className={classes.cardHover}>
                                <CardHeader
                                    className={classes.cardHeaderHover}>
                                    <a href=""
                                       onClick={e => {
                                           e.preventDefault()
                                           window.location.href = 'http://localhost:3000/ibstu/material/' + material.id
                                       }}>
                                        <img src={materialsImage} alt="..."
                                             style={{
                                                 maxWidth: '100%',
                                                 maxHeight: '100%'
                                             }} />
                                    </a>
                                </CardHeader>
                                <CardBody>
                                    <h4 className={classes.cardProductTitle}>
                                        <a href=""
                                           onClick={e => e.preventDefault()}>
                                            {material.header}
                                        </a>
                                    </h4>
                                </CardBody>
                            </Card>
                        </GridItem>
                    ))}
                </GridContainer>
            </div>
        )
    }
}

MaterialsContainer.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(dashboardStyle)(MaterialsContainer)
