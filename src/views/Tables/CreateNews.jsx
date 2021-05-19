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
import Keycloak from 'keycloak-js'
import React from 'react'
import {ibstu} from '../../api/ibstu-api'
import userProfileStyles
    from '../../assets/jss/material-dashboard-pro-react/views/userProfileStyles'
import ImageUpload from '../../components/CustomUpload/ImageUpload'

class CreateNews extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            newsHeader: '',
            newsDescription: '',
            file: null,
            keycloak: null,
            authenticated: false
        }
        this.buttonIsClicked = this.buttonIsClicked.bind(this)
    }

    componentDidMount() {
        const keycloak = Keycloak('/keycloak.json')
        keycloak.init({onLoad: 'login-required'}).then(authenticated => {
            localStorage.setItem('token', keycloak.token)
            this.setState({keycloak, authenticated})
        })
    }

    buttonIsClicked() {
        ibstu.createNews(
            this.state.newsHeader,
            this.state.newsDescription,
            this.state.file
        ).then(data => {
                alert('Добавлено')
            }, error => {
                alert(error.message)
            }
        )
    }

    render() {
        if (this.state.keycloak === null) return <></>
        const creator = this.state.keycloak.tokenParsed.name
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
                                    Добавить новость
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
                                        <ImageUpload t={this} photo={true} />
                                    </GridItem>
                                </GridContainer>
                                <Button color="rose"
                                        className={userProfileStyles.updateProfileButton}
                                        onClick={this.buttonIsClicked}>
                                    Добавить новость
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

export default CreateNews