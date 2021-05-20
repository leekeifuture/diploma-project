// @material-ui/core components
// @material-ui/icons
import PermIdentity from '@material-ui/icons/PermIdentity'
import Card from 'components/Card/Card.jsx'
import CardBody from 'components/Card/CardBody.jsx'
import CardHeader from 'components/Card/CardHeader.jsx'
import CardIcon from 'components/Card/CardIcon.jsx'
import Clearfix from 'components/Clearfix/Clearfix.jsx'
import Button from 'components/CustomButtons/Button.jsx'
import CustomInput from 'components/CustomInput/CustomInput.jsx'
// core components
import GridContainer from 'components/Grid/GridContainer.jsx'
import GridItem from 'components/Grid/GridItem.jsx'
import React from 'react'
import {withRouter} from 'react-router-dom'
import {ibstu} from '../../api/ibstu-api'
import userProfileStyles
    from '../../assets/jss/material-dashboard-pro-react/views/userProfileStyles'
import ImageUpload from '../../components/CustomUpload/ImageUpload'

class EditNews extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            newsHeader: '',
            newsDescription: '',
            news: null,
            file: null
        }
        this.buttonIsClicked = this.buttonIsClicked.bind(this)
    }

    componentDidMount() {
        console.log(this.props.match.params)
        ibstu.getNew(this.props.match.params.newsId)
            .then(news => {
                    this.setState({newsHeader: news.header})
                    this.setState({newsDescription: news.content})
                    this.setState({news})
                }, error => {
                    console.error(error)
                }
            )
    }

    buttonIsClicked() {
        ibstu.updateNews(
            this.state.newsHeader,
            this.state.newsDescription,
            this.props.match.params.newsId,
            this.state.file
        ).then(data => {
                alert('Изменено')
            }, error => {
                alert(error.message)
            }
        )
    }

    render() {
        if (this.state.news === null) return <></>
        const ln = this.state.news.lastName ? this.state.news.lastName : ''
        const fn = this.state.news.firstName ? this.state.news.firstName : ''
        const md = this.state.news.middleName ? this.state.news.middleName : ''
        const creator = `${ln} ${fn} ${md}`
        return (
            <div>
                <GridContainer>
                    <GridItem xs={12} sm={12} md={12}>
                        <Card>
                            <CardHeader color="rose" icon>
                                <CardIcon color="rose">
                                    <PermIdentity />
                                </CardIcon>
                                <h4>
                                    Обновить материал
                                </h4>
                            </CardHeader>
                            <CardBody>
                                <GridContainer>
                                    <GridItem xs={12} sm={12} md={12}>
                                        <CustomInput
                                            labelText={'Создатель: ' + creator}
                                            id="company-disabled"
                                            formControlProps={{
                                                fullWidth: true
                                            }}
                                            inputProps={{
                                                disabled: true
                                            }}
                                        />
                                    </GridItem>
                                </GridContainer>
                                <GridContainer>
                                    <GridItem xs={12} sm={12} md={12}>
                                        <CustomInput
                                            inputProps={{
                                                value: this.state.newsHeader,
                                                onChange: (event) => this.setState({newsHeader: event.target.value})
                                            }}
                                            labelText="Заголовок"
                                            id="first-name"
                                            formControlProps={{
                                                fullWidth: true
                                            }}
                                        />
                                    </GridItem>
                                </GridContainer>
                                <GridContainer>
                                    <GridItem xs={12} sm={12} md={12}>
                                        <CustomInput
                                            labelText="Описание"
                                            id="about-me"
                                            formControlProps={{
                                                fullWidth: true
                                            }}
                                            inputProps={{
                                                value: this.state.newsDescription,
                                                onChange: (event) => this.setState({newsDescription: event.target.value}),
                                                multiline: true,
                                                rows: 5
                                            }}
                                        />
                                    </GridItem>
                                </GridContainer>
                                <GridContainer>
                                    <GridItem xs={12} sm={12} md={12}>
                                        <ImageUpload t={this}
                                                     imageUrl={this.state.news.imageUrl}
                                                     photo />
                                    </GridItem>
                                </GridContainer>
                                <Button color="rose"
                                        className={userProfileStyles.updateProfileButton}
                                        onClick={this.buttonIsClicked}>
                                    Обновить материал
                                </Button>
                                <Clearfix />
                            </CardBody>
                        </Card>
                    </GridItem>
                </GridContainer>
            </div>
        )
    }
}

export default withRouter(EditNews)
