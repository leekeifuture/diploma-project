// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
// @material-ui/icons
import Assignment from '@material-ui/icons/Assignment'
import CreateIcon from '@material-ui/icons/Create'

import {cardTitle} from 'assets/jss/material-dashboard-pro-react.jsx'
import Card from 'components/Card/Card.jsx'
import CardBody from 'components/Card/CardBody.jsx'
import CardHeader from 'components/Card/CardHeader.jsx'
import CardIcon from 'components/Card/CardIcon.jsx'
// core components
import GridContainer from 'components/Grid/GridContainer.jsx'
import GridItem from 'components/Grid/GridItem.jsx'
import Keycloak from 'keycloak-js'
import React from 'react'
import {NavLink} from 'react-router-dom'
// react component for creating dynamic tables
import ReactTable from 'react-table'
import {ibstu} from '../../api/ibstu-api'
import Button from '../../components/CustomButtons/Button'

const styles = {
    cardIconTitle: {
        ...cardTitle,
        marginTop: '15px',
        marginBottom: '0px'
    }
}

class TeachersTable extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            keycloak: null,
            authenticated: false
        }
    }

    getCustomActions(key) {
        return (
            <div className="actions-right">
                <NavLink to={`/ibstu/edit-teacher/${key}`}>
                    <Button
                        justIcon
                        round
                        simple
                        color="info"
                        className="edit"
                    >
                        <CreateIcon />
                    </Button>
                </NavLink>
            </div>
        )
    }

    componentDidMount() {
        const keycloak = Keycloak('/keycloak.json')
        keycloak.init({onLoad: 'login-required'}).then(authenticated => {
            localStorage.setItem('token', keycloak.token)

            const departmentId = localStorage.getItem('departmentId')

            ibstu.getTeachers(departmentId)
                .then(teachers => {
                        const data = teachers.map(teacher => {
                            teacher.actions = this.getCustomActions(teacher.userId)
                            return teacher
                        })
                        setTimeout(() => this.setState({data}), 500)
                    }, error => {
                        console.error(error)
                    }
                )

            this.setState({keycloak, authenticated})
        })

    }

    render() {
        const {classes} = this.props
        return (
            <GridContainer>
                <NavLink to={'/ibstu/register-page'}>
                    <Button>
                        Зарегистрировать нового
                    </Button>
                </NavLink>
                <GridItem xs={12}>
                    <Card>
                        <CardHeader color="primary" icon>
                            <CardIcon color="primary">
                                <Assignment />
                            </CardIcon>
                            <h4 className={classes.cardIconTitle}>
                                Все преподаватели вашей кафедры
                            </h4>
                        </CardHeader>
                        <CardBody>
                            <ReactTable
                                data={this.state.data}
                                filterable
                                columns={[
                                    {
                                        Header: 'Фамилия',
                                        accessor: 'lastName'
                                    },
                                    {
                                        Header: 'Имя',
                                        accessor: 'firstName'
                                    },
                                    {
                                        Header: 'Отчество',
                                        accessor: 'middleName'
                                    },
                                    {
                                        Header: 'Должность',
                                        accessor: 'position'
                                    },
                                    {
                                        Header: 'Действия',
                                        accessor: 'actions',
                                        sortable: false,
                                        filterable: false
                                    }
                                ]}
                                // defaultPageSize={10}
                                // showPaginationTop
                                showPaginationBottom={false}
                                className="-striped -highlight"
                            />
                        </CardBody>
                    </Card>
                </GridItem>
            </GridContainer>
        )
    }
}

export default withStyles(styles)(TeachersTable)
