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
import {baseURL, ibstu} from '../../api/ibstu-api'
import defaultAvatar from '../../assets/img/default-avatar.png'

class TeacherContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            teacher: null
        }
    }

    componentDidMount() {
        ibstu.getTeacher(this.props.match.params.userId).then(teacher => {
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
            ? `${baseURL}/static-files/${teacher.id}/avatar.png`
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
                            <a href=""
                               onClick={e => e.preventDefault()}>
                                <img src={profilePicture} alt="..."
                                     style={{
                                         maxWidth: '200px',
                                         maxHeight: '200px'
                                     }} />
                            </a>
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
            </div>
        )
    }

    getProfileInfo(profile) {
        if (!(Object.keys(profile).length > 2)) return <b>Информация
            отсутствует</b>
        const profileInfo = []

        const fields = {
            'degree': 'Образование',
            'title': 'Должность',
            'biography': 'Биография',
            'education': 'Образование',
            'experience': 'Опыт',
            'awards': 'Награды',
            'scientInterests': 'Научные интересы',
            'leadership': 'Руководство',
            'projectActivities': 'Проектная деятельность',
            'productionActivities': 'Производственная деятельность',
            'socialWork': 'Социальная работа',
            'disciplines': 'Дисциплины'
        }

        Object.keys(fields).map((field, index) => {
            if (profile[field]) {
                profileInfo.push(
                    <div key={index}>
                        <h3>{fields[field]}</h3>
                        <div>{profile[field]}</div>
                    </div>
                )
            }
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
