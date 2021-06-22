// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
// @material-ui/icons
import PermIdentity from '@material-ui/icons/PermIdentity'

import userProfileStyles
    from 'assets/jss/material-dashboard-pro-react/views/userProfileStyles.jsx'
import Card from 'components/Card/Card.jsx'
import CardBody from 'components/Card/CardBody.jsx'
import CardHeader from 'components/Card/CardHeader.jsx'
import CardIcon from 'components/Card/CardIcon.jsx'
import Clearfix from 'components/Clearfix/Clearfix.jsx'
// core components
import GridContainer from 'components/Grid/GridContainer.jsx'
import GridItem from 'components/Grid/GridItem.jsx'
import React from 'react'
import {withRouter} from 'react-router-dom'
import {ibstu} from '../../api/ibstu-api'
import defaultAvatar from '../../assets/img/default-avatar.png'
import Button from '../../components/CustomButtons/Button'
import CustomInput from '../../components/CustomInput/CustomInput'
import ImageUpload from '../../components/CustomUpload/ImageUpload'

const fields = {
    firstName: 'Имя',
    lastName: 'Фамилия',
    middleName: 'Отчество',
    degree: 'Образование',
    title: 'Должность',
    biography: 'Биография',
    education: 'Образование',
    experience: 'Опыт',
    awards: 'Награды',
    scientInterests: 'Научные интересы',
    leadership: 'Руководство',
    projectActivities: 'Проектная деятельность',
    productionActivities: 'Производственная деятельность',
    socialWork: 'Социальная работа',
    disciplines: 'Дисциплины'
}

class TeacherContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            teacher: null,
            file: null,
            firstName: '',
            lastName: '',
            middleName: '',
            degree: '',
            title: '',
            biography: '',
            education: '',
            experience: '',
            awards: '',
            scientInterests: '',
            leadership: '',
            projectActivities: '',
            productionActivities: '',
            socialWork: '',
            disciplines: ''
        }
        this.buttonIsClicked = this.buttonIsClicked.bind(this)
    }

    componentDidMount() {
        const userId = this.props.match.params.userId
            ? this.props.match.params.userId
            : this.props.keycloak.tokenParsed.user_id

        ibstu.getTeacher(userId).then(teacher => {
                const state = {}
                Object.keys(teacher.profile).forEach(field => {
                    state[field] = teacher.profile[field]
                })
                this.setState(state)
                this.setState({teacher})
            }, error => {
                console.error(error)
            }
        )
    }

    render() {
        const teacher = this.state.teacher
        if (teacher === null) {
            return <></>
        }
        const profilePicture = teacher.imageUrl
            ? `/${teacher.id}/avatar.png`
            : defaultAvatar

        const ln = teacher.profile.lastName
            ? teacher.profile.lastName
            : ''
        const fn = teacher.profile.firstName
            ? teacher.profile.firstName
            : ''
        const md = teacher.profile.middleName
            ? teacher.profile.middleName
            : ''

        const {classes} = this.props
        return (
            <div>
                <GridContainer>
                    <GridItem xs={12} sm={12} md={4}>
                        <Card profile>
                            <GridItem xs={12} sm={12} md={12}>
                                <ImageUpload t={this}
                                             imageUrl={profilePicture}
                                             photo />
                            </GridItem>
                            <CardBody profile>
                                <h6 className={classes.cardCategory}>
                                    {teacher.department.positionName}
                                </h6>
                                <h4 className={classes.cardTitle}>
                                    {`${ln} ${fn} ${md}`}
                                </h4>
                                <p className={classes.description}>
                                    {teacher.department.departmentName}
                                </p>
                            </CardBody>
                        </Card>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={8}>
                        <Card>
                            <CardHeader color="rose" icon>
                                <CardIcon color="rose">
                                    <PermIdentity />
                                </CardIcon>
                            </CardHeader>
                            <CardBody>
                                <GridContainer>
                                    <GridItem xs={12} sm={12} md={12}>
                                        {this.getProfileInfo(teacher.profile)}
                                        {this.getContacts(teacher.contacts)}
                                    </GridItem>
                                </GridContainer>
                                <Clearfix />
                            </CardBody>
                        </Card>
                    </GridItem>
                </GridContainer>
                <Button color="rose"
                        className={userProfileStyles.updateProfileButton}
                        onClick={this.buttonIsClicked}>
                    Обновить профиль
                </Button>
            </div>
        )
    }

    buttonIsClicked() {
        const params = {...this.state}
        const userId = params.teacher.id
        delete params.teacher
        delete params.file

        ibstu.updateUserProfile(params, userId)
            .then(data => {
                    console.log(this.state.file)
                    if (this.state.file !== null) {
                        ibstu.addAvatarToUser(this.state.file)
                            .then(data => {
                                this.setState({file: null})
                                alert('Изменено')
                            }, error => {
                                alert(error.message)
                            })
                    } else {
                        alert('Изменено')
                    }
                }, error => {
                    alert(error.message)
                }
            )
    }

    getProfileInfo(profile) {
        const profileInfo = []

        Object.keys(fields).map((field, index) => {
            const value = this.state[field] ? this.state[field] : ''
            profileInfo.push(
                <div key={index}>
                    <CustomInput
                        inputProps={{
                            value,
                            onChange: (event) => {
                                const state = {}
                                state[field] = event.target.value
                                this.setState(state)
                            }
                        }}
                        labelText={fields[field]}
                        id="first-name"
                        formControlProps={{
                            fullWidth: true
                        }}
                    />
                </div>
            )
        })

        return profileInfo
    }

    getContacts(contacts) {
        if (contacts.length === 0) {
            return (<></>)
        }

        return (
            <div>
                <h3>Контактная информация</h3>
                {contacts.map((contact, index) => (
                    <div key={index}>
                        {contact.type}: {contact.value}
                        <br />
                    </div>
                ))}
            </div>
        )
    }
}

export default withRouter(withStyles(userProfileStyles)(TeacherContainer))
