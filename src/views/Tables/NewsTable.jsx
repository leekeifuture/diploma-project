// @material-ui/core components
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
import withStyles from '@material-ui/core/styles/withStyles'
import {Announcement} from '@material-ui/icons'
// @material-ui/icons
import CreateIcon from '@material-ui/icons/Create'

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

class NewsTable extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            news: null,
            newsContent: [],
            facultyId: localStorage.getItem('facultyId'),
            departmentId: localStorage.getItem('departmentId'),
            data: [],
            faculties: [],
            departments: []
        }
    }

    getCustomActions(key) {
        return (
            <div className="actions-right">
                <NavLink to={`/auth-ibstu/edit-news/${key}`}>
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

    getCustomActionsMs(key, url) {
        return (
            <></>
        )
    }

    componentDidMount() {
        if (this.props.ms) {
            const data = this.props.data.map(newObj => {
                newObj.actions = this.getCustomActionsMs(newObj.id)
                return newObj
            })
            this.setState({data})
        } else {
            ibstu.getFaculties().then(faculties => {
                    this.setState({faculties})
                }, error => {
                    console.error(error)
                }
            )

            ibstu.getDepartments(this.state.facultyId).then(departments => {
                    this.setState({departments})
                }, error => {
                    console.error(error)
                }
            )

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
        }
    }

    getDepartmentsComponent(classes, departments, departmentId) {
        if (this.state.facultyId !== '') {
            return (
                <GridItem xs={12} sm={12} md={12}
                          lg={12} style={{marginBottom: '20px'}}>
                    <FormControl
                        fullWidth
                        className={classes.selectFormControl}
                    >
                        <InputLabel
                            htmlFor="simple-select"
                            className={classes.selectLabel}
                        >
                            Кафедра
                        </InputLabel>
                        <Select
                            MenuProps={{
                                className: classes.selectMenu
                            }}
                            classes={{
                                select: classes.select
                            }}
                            value={departmentId}
                            onChange={
                                (event) => {
                                    ibstu.getNews(event.target.value)
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

                                    this.setState({departmentId: event.target.value})
                                }
                            }
                            inputProps={{
                                name: 'simpleSelect',
                                id: 'simple-select'
                            }}
                        >
                            {departments.map((department, index) => (
                                <MenuItem
                                    key={index}
                                    classes={{
                                        root: classes.selectMenuItem,
                                        selected: classes.selectMenuItemSelected
                                    }}
                                    value={department.id}
                                >
                                    {department.name}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </GridItem>
            )
        }
    }

    getHeaderInputs(classes) {
        if (!this.props.ms) {
            return (
                <>
                    <GridItem xs={12} sm={12} md={12}
                              lg={12} style={{marginBottom: '20px'}}>
                        <FormControl
                            fullWidth
                            className={classes.selectFormControl}
                        >
                            <InputLabel
                                htmlFor="simple-select"
                                className={classes.selectLabel}
                            >
                                Факультет
                            </InputLabel>
                            <Select
                                MenuProps={{
                                    className: classes.selectMenu
                                }}
                                classes={{
                                    select: classes.select
                                }}
                                value={this.state.facultyId}
                                onChange={
                                    (event) => {
                                        this.setState({facultyId: event.target.value})
                                        this.setState({departmentId: ''})
                                        ibstu.getDepartments(event.target.value).then(departments => {
                                                this.setState({departments})
                                            }, error => {
                                                console.error(error)
                                            }
                                        )
                                    }
                                }
                                inputProps={{
                                    name: 'simpleSelect',
                                    id: 'simple-select'
                                }}
                            >
                                {this.state.faculties.map((faculty, index) => (
                                    <MenuItem
                                        key={index}
                                        classes={{
                                            root: classes.selectMenuItem,
                                            selected: classes.selectMenuItemSelected
                                        }}
                                        value={faculty.id}
                                    >
                                        {faculty.name}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </GridItem>
                    {this.getDepartmentsComponent(classes, this.state.departments, this.state.departmentId)}
                </>
            )
        }
    }

    getHeader(classes) {
        if (!this.props.ms) {
            return (
                <CardHeader color="primary" icon>
                    <CardIcon color="primary">
                        <Announcement />
                    </CardIcon>
                    <h4 className={classes.cardIconTitle}>
                        Изменение новостей
                    </h4>
                </CardHeader>
            )
        }
    }

    getButton() {
        if (!this.props.ms) {
            return (
                <NavLink to={'/auth-ibstu/create-news'}>
                    <Button>
                        Создать новость
                    </Button>
                </NavLink>
            )
        }
    }

    render() {
        const {classes} = this.props
        return (
            <GridContainer>
                {this.getHeaderInputs(classes)}
                <GridItem xs={12}>
                    {this.getButton()}
                </GridItem>
                <GridItem xs={12}>
                    <Card>
                        {this.getHeader(classes)}
                        <CardBody>
                            <ReactTable
                                data={this.props.ms ? this.props.data : this.state.data}
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

export default withStyles(styles)(NewsTable)
