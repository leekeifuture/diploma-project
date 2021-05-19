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

class NewsTables extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            news: null,
            newsContent: [],
            departmentId: localStorage.getItem('departmentId'),
            data: [],
            keycloak: null,
            authenticated: false
        }
    }

    getCustomActions(key) {
        return (
            <div className="actions-right">
                <NavLink to={`/ibstu/edit-new/${key}`}>
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

            ibstu.getNews(this.state.departmentId)
                .then(news => {
                        const data = news.content.map(newObj => {
                            newObj.actions = this.getCustomActions(newObj.id)
                            return newObj
                        })

                        this.setState({data})
                        this.setState({news})
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
                <NavLink to={'/ibstu/create-news'}>
                    <Button>
                        Создать новость
                    </Button>
                </NavLink>
                <GridItem xs={12}>
                    <Card>
                        <CardHeader color="primary" icon>
                            <CardIcon color="primary">
                                <Assignment />
                            </CardIcon>
                            <h4 className={classes.cardIconTitle}>
                                Изменение новостей
                            </h4>
                        </CardHeader>
                        <CardBody>
                            <ReactTable
                                data={this.state.data}
                                filterable
                                columns={[
                                    {
                                        Header: 'Заголовок',
                                        accessor: 'header'
                                    },
                                    {
                                        Header: 'Дата создания',
                                        accessor: 'createdAt'
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

export default withStyles(styles)(NewsTables)
