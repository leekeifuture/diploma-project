// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
// @material-ui/icons
import PermIdentity from '@material-ui/icons/PermIdentity'

import userProfileStyles
    from 'assets/jss/material-dashboard-pro-react/views/userProfileStyles.jsx'
import Card from 'components/Card/Card.jsx'
import CardBody from 'components/Card/CardBody.jsx'
import CardHeader from 'components/Card/CardHeader.jsx'
import CardIcon from 'components/Card/CardIcon.jsx'
import Clearfix from 'components/Clearfix/Clearfix.jsx'
// core components
import GridContainer from 'components/Grid/GridContainer.jsx'
import GridItem from 'components/Grid/GridItem.jsx'
import React from 'react'
import {baseURL, ibstu} from '../../api/ibstu-api'
import CardFooter from '../../components/Card/CardFooter'
import Button from '../../components/CustomButtons/Button'

class MaterialContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            material: null
        }
    }

    componentDidMount() {
        ibstu.getMaterial(this.props.match.params.materialId).then(material => {
                this.setState({material})
            }, error => {
                console.error(error)
            }
        )
    }

    render() {
        const material = this.state.material
        if (material === null) {
            return <></>
        }

        const ln = material.lastName
            ? material.lastName
            : ''
        const fn = material.firstName
            ? material.firstName
            : ''
        const md = material.middleName
            ? material.middleName
            : ''

        const {classes} = this.props
        return (
            <div>
                <GridContainer>
                    <GridItem xs={12} sm={12} md={12}>
                        <Card>
                            <CardHeader color="rose" icon>
                                <CardIcon color="rose">
                                    <PermIdentity />
                                </CardIcon>
                            </CardHeader>
                            <CardBody>
                                <GridContainer>
                                    <GridItem xs={12} sm={12} md={12}>
                                        <h3>{material.header}</h3>
                                        <h6>{`Создатель: ${ln} ${fn} ${md}`}</h6>
                                        <div>{material.description}</div>
                                        <CardFooter
                                            className={classes.justifyContentCenter}>
                                            <Button color="rose" round
                                                    onClick={() => window.location.href = baseURL + '/static-files' + material.url}>
                                                Скачать
                                            </Button>
                                        </CardFooter>
                                    </GridItem>
                                </GridContainer>
                                <Clearfix />
                            </CardBody>
                        </Card>
                    </GridItem>
                </GridContainer>
            </div>
        )
    }

}

export default withStyles(userProfileStyles)(MaterialContainer)
