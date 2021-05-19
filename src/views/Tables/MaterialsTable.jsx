// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
// @material-ui/icons
import Assignment from '@material-ui/icons/Assignment'
import Close from '@material-ui/icons/Close'
import CreateIcon from '@material-ui/icons/Create'
import GetAppIcon from '@material-ui/icons/GetApp'

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
import {baseURL, ibstu} from '../../api/ibstu-api'
import Button from '../../components/CustomButtons/Button'

const styles = {
    cardIconTitle: {
        ...cardTitle,
        marginTop: '15px',
        marginBottom: '0px'
    }
}

class MaterialsTable extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            keycloak: null,
            authenticated: false
        }
    }

    getCustomActions(key, url) {
        console.log('/static-files' + url)
        return (
            <div className="actions-right">
                <a href={`${baseURL}/static-files${url}`}>
                    <Button
                        justIcon
                        round
                        simple
                        color="success"
                        className="download"
                    >
                        <GetAppIcon />
                    </Button>
                </a>{' '}
                <NavLink to={`/ibstu/edit-material/${key}`}>
                    <Button
                        justIcon
                        round
                        simple
                        color="info"
                        className="edit"
                    >
                        <CreateIcon />
                    </Button>
                </NavLink>{' '}
                <Button
                    justIcon
                    round
                    simple
                    onClick={() => {
                        var data = this.state.data
                        data.find((o, i) => {
                            if (o.id === key) {
                                ibstu.removeMaterial(o.id)
                                    .then(
                                        data => alert('Удалено'),
                                        error => alert(error.message)
                                    )

                                data.splice(i, 1)
                                return true
                            }
                            return false
                        })
                        this.setState({data})
                    }}
                    color="danger"
                    className="remove"
                >
                    <Close />
                </Button>{' '}
            </div>
        )
    }

    componentDidMount() {
        const keycloak = Keycloak('/keycloak.json')
        keycloak.init({onLoad: 'login-required'}).then(authenticated => {
            localStorage.setItem('token', keycloak.token)

            ibstu.getMaterialsByUserId(keycloak.tokenParsed.user_id)
                .then(materials => {
                        const data = materials.map(material => {
                            ibstu.getMaterial(material.id).then(materialInfo => {
                                    const ln = materialInfo.lastName ? materialInfo.lastName : ''
                                    const fn = materialInfo.firstName ? materialInfo.firstName : ''
                                    const md = materialInfo.middleName ? materialInfo.middleName : ''
                                    material.creator = `${ln} ${fn} ${md}`
                                    material.description = materialInfo.description
                                }, error => {
                                    console.error(error)
                                }
                            )

                            material.actions = this.getCustomActions(material.id, material.url)
                            return material
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
                <NavLink to={'/ibstu/create-material'}>
                    <Button>
                        Загрузить новый
                    </Button>
                </NavLink>
                <GridItem xs={12}>
                    <Card>
                        <CardHeader color="primary" icon>
                            <CardIcon color="primary">
                                <Assignment />
                            </CardIcon>
                            <h4 className={classes.cardIconTitle}>
                                Все ваши материалы
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
                                        Header: 'Тип',
                                        accessor: 'mimeType'
                                    },
                                    {
                                        Header: 'Описание',
                                        accessor: 'description'
                                    },
                                    {
                                        Header: 'Создатель',
                                        accessor: 'creator'
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

export default withStyles(styles)(MaterialsTable)
