// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
// @material-ui/icons
import CreateIcon from '@material-ui/icons/Create'
import PermIdentity from '@material-ui/icons/PermIdentity'

import {cardTitle} from 'assets/jss/material-dashboard-pro-react.jsx'
import Card from 'components/Card/Card.jsx'
import CardBody from 'components/Card/CardBody.jsx'
import CardHeader from 'components/Card/CardHeader.jsx'
import CardIcon from 'components/Card/CardIcon.jsx'
// core components
import GridContainer from 'components/Grid/GridContainer.jsx'
import GridItem from 'components/Grid/GridItem.jsx'
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
            data: []
        }
    }

    getCustomActions(key) {
        return (
            <div className="actions-right">
                <NavLink to={`/auth-ibstu/edit-teacher/${key}`}>
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
        const departmentId = localStorage.getItem('departmentId')

        if (this.props.ms) {
            setTimeout(() => this.setState({data: this.props.data}), 500)
        } else {
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
        }
    }

    getHeader(classes) {
        if (!this.props.ms) {
            return (
                <CardHeader color="primary" icon>
                    <CardIcon color="primary">
                        <PermIdentity />
                    </CardIcon>
                    <h4 className={classes.cardIconTitle}>
                        Все преподаватели вашей кафедры
                    </h4>
                </CardHeader>
            )
        }
    }

    render() {
        const {classes} = this.props
        const columns = [
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
        ]

        return (
            <GridContainer>
                <NavLink to={'/auth-ibstu/register-page'}>
                    <Button>
                        Зарегистрировать нового
                    </Button>
                </NavLink>
                <GridItem xs={12}>
                    <Card>
                        {this.getHeader(classes)}
                        <CardBody>
                            <ReactTable
                                data={this.props.ms ? this.props.data : this.state.data}
                                filterable
                                columns={columns}
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
