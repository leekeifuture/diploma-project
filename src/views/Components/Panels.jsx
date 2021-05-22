// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
import {Announcement, Assignment, PermIdentity} from '@material-ui/icons'
import Search from '@material-ui/icons/Search'
// @material-ui/icons
import {cardTitle} from 'assets/jss/material-dashboard-pro-react.jsx'
import Card from 'components/Card/Card.jsx'
import CardBody from 'components/Card/CardBody.jsx'
import CardHeader from 'components/Card/CardHeader.jsx'
// core components
import GridContainer from 'components/Grid/GridContainer.jsx'
import GridItem from 'components/Grid/GridItem.jsx'
import NavPills from 'components/NavPills/NavPills.jsx'
import React from 'react'
import {ibstu} from '../../api/ibstu-api'
import Button from '../../components/CustomButtons/Button'
import CustomInput from '../../components/CustomInput/CustomInput'
import MaterialsTable from '../Tables/MaterialsTable'
import NewsTable from '../Tables/NewsTable'
import TeachersTable from '../Tables/TeachersTable'

const styles = {
    cardTitle,
    pageSubcategoriesTitle: {
        color: '#3C4858',
        textDecoration: 'none',
        textAlign: 'center'
    },
    cardCategory: {
        margin: '0',
        color: '#999999'
    }
}

class Panels extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            searchText: '',
            result: null
        }
        this.buttonIsClicked = this.buttonIsClicked.bind(this)
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({searchText: localStorage.getItem('ms')})
            setTimeout(() => {
                ibstu.searchByKeyWord(this.state.searchText)
                    .then(result => {
                            this.setState({result})
                        }, error => {
                            console.error(error)
                        }
                    )
            }, 200)
        }, 200)
    }

    buttonIsClicked() {
        ibstu.searchByKeyWord(this.state.searchText)
            .then(result => {
                    this.setState({result})
                }, error => {
                    console.error(error)
                }
            )
    }

    render() {
        if (this.state.result === null) return <></>

        const {classes} = this.props
        const searchButton =
            classes.top +
            ' ' +
            classes.searchButton
        return (
            <div>
                <GridContainer>
                    <GridItem xs={12} sm={12} md={12}>
                        <Card>
                            <CardHeader>
                                <h4 className={classes.cardTitle}>
                                    Мульти-поиск
                                </h4>
                            </CardHeader>
                            <CardBody>
                                <CustomInput
                                    labelText="Запрос поиска"
                                    id="searchMs"
                                    formControlProps={{}}
                                    inputProps={{
                                        value: this.state.searchText,
                                        onChange: (event) => this.setState({searchText: event.target.value})
                                    }}
                                />
                                <Button
                                    onClick={() => this.buttonIsClicked()}
                                    color="white"
                                    aria-label="edit"
                                    justIcon
                                    round
                                    className={searchButton}
                                >
                                    <Search
                                        className={classes.headerLinksSvg + ' ' + classes.searchIcon}
                                    />
                                </Button>
                                <br />
                                <NavPills
                                    color="rose"
                                    horizontal={{
                                        tabsGrid: {xs: 12, sm: 12, md: 2},
                                        contentGrid: {xs: 12, sm: 12, md: 10}
                                    }}
                                    tabs={[
                                        {
                                            tabButton: 'Преподаватели',
                                            tabIcon: PermIdentity,
                                            tabContent: (<TeachersTable
                                                ms
                                                data={this.state.result.users}
                                            />)
                                        }, {
                                            tabButton: 'Файлы',
                                            tabIcon: Assignment,
                                            tabContent: (<MaterialsTable
                                                ms
                                                data={this.state.result.files}
                                            />)
                                        },
                                        {
                                            tabButton: 'Новости',
                                            tabIcon: Announcement,
                                            tabContent: (<NewsTable
                                                ms
                                                data={this.state.result.news}
                                            />)
                                        }
                                    ]}
                                />
                            </CardBody>
                        </Card>
                    </GridItem>
                </GridContainer>
            </div>
        )
    }
}

export default withStyles(styles)(Panels)
