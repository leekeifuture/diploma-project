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
import React from 'react'
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

class ReactTables extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
    }

    getCustomActions(key) {
        return (
            <div className="actions-right">
                <Button
                    justIcon
                    round
                    simple
                    onClick={() => {
                        let obj = this.state.data.find(o => o.id === key)
                        window.location.href = baseURL + '/static-files' + obj.url
                    }}
                    color="success"
                    className="download"
                >
                    <GetAppIcon />
                </Button>{' '}
                <Button
                    justIcon
                    round
                    simple
                    onClick={() => {
                        let obj = this.state.data.find(o => o.id === key)
                        window.location.href = 'http://localhost:3000/ibstu/edit-material/' + obj.id
                    }}
                    color="info"
                    className="edit"
                >
                    <CreateIcon />
                </Button>{' '}
                <Button
                    justIcon
                    round
                    simple
                    onClick={() => {
                        var data = this.state.data
                        data.find((o, i) => {
                            if (o.id === key) {
                                // here you should add some custom code so you can delete the data
                                // from this component and from your server as well
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
        // TODO: hc
        ibstu.getMaterialsByUserId(4801).then(materials => {
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

                    material.actions = this.getCustomActions(material.id)
                    return material
                })
                setTimeout(() => this.setState({data}), 500)
            }, error => {
                console.error(error)
            }
        )
    }

    render() {
        const {classes} = this.props
        return (
            <GridContainer>
                <Button
                    onClick={() => window.location.href = 'http://localhost:3000/ibstu/new-mateial'}
                >
                    Загрузить новый
                </Button>
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

export default withStyles(styles)(ReactTables)
