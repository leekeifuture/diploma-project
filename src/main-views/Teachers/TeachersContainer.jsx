import withStyles from '@material-ui/core/styles/withStyles'

import dashboardStyle
    from 'assets/jss/material-dashboard-pro-react/views/dashboardStyle'
import PropTypes from 'prop-types'
import React from 'react'
import {baseURL, ibstu} from '../../api/ibstu-api'
import defaultAvatar from '../../assets/img/default-avatar.png'
import Card from '../../components/Card/Card'
import CardBody from '../../components/Card/CardBody'
import CardHeader from '../../components/Card/CardHeader'
import GridContainer from '../../components/Grid/GridContainer'
import GridItem from '../../components/Grid/GridItem'

class MenuContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            teachers: []
        }
    }

    componentDidMount() {
        const departmentId = localStorage.getItem('departmentId')
        ibstu.getTeachers(departmentId).then(teachers => {
                this.setState({teachers})
            }, error => {
                console.error(error)
            }
        )
    }

    render() {
        const department = localStorage.getItem('department')

        const {classes} = this.props
        return (
            <div>
                <h3>Преподаватели кафедры {department}</h3>
                <br />
                <GridContainer>
                    {this.state.teachers.map((teacher, index) => {
                        if (teacher.firstName === null) {
                            return <div key={index} />
                        }

                        const profilePicture = teacher.imageUrl
                            ? `${baseURL}/static-files/${teacher.id}/avatar.png`
                            : defaultAvatar
                        return (
                            <GridItem key={index} xs={12} sm={12} md={2}>
                                <Card product className={classes.cardHover}>
                                    <CardHeader
                                        className={classes.cardHeaderHover}>
                                        <a href="#pablo"
                                           onClick={e => {
                                               e.preventDefault()
                                               window.location.href = 'http://localhost:3000/ibstu/teacher/' + teacher.userId
                                           }}>
                                            <img src={profilePicture} alt="..."
                                                 style={{
                                                     maxWidth: '100%',
                                                     maxHeight: '100%'
                                                 }} />
                                        </a>
                                    </CardHeader>
                                    <CardBody>
                                        <h4 className={classes.cardProductTitle}>
                                            <a href="#pablo"
                                               onClick={e => {
                                                   e.preventDefault()
                                                   window.location.href = 'http://localhost:3000/ibstu/teacher/' + teacher.userId
                                               }}>
                                                {`${teacher.lastName} ${teacher.firstName} ${teacher.middleName}`}
                                            </a>
                                        </h4>
                                    </CardBody>
                                </Card>
                            </GridItem>
                        )
                    })}
                </GridContainer>
            </div>
        )
    }
}

MenuContainer.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(dashboardStyle)(MenuContainer)
