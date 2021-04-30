// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
// @material-ui/icons
import PermIdentity from '@material-ui/icons/PermIdentity'

import avatar from 'assets/img/faces/marc.jpg'

import userProfileStyles
    from 'assets/jss/material-dashboard-pro-react/views/userProfileStyles.jsx'
import Card from 'components/Card/Card.jsx'
import CardAvatar from 'components/Card/CardAvatar.jsx'
import CardBody from 'components/Card/CardBody.jsx'
import CardHeader from 'components/Card/CardHeader.jsx'
import CardIcon from 'components/Card/CardIcon.jsx'
import Clearfix from 'components/Clearfix/Clearfix.jsx'
// core components
import GridContainer from 'components/Grid/GridContainer.jsx'
import GridItem from 'components/Grid/GridItem.jsx'
import React from 'react'

function UserProfile(props) {
    const {classes} = props
    return (
        <div>
            <GridContainer>
                <GridItem xs={12} sm={12} md={4}>
                    <Card profile>
                        <CardAvatar profile>
                            <a href="#pablo" onClick={e => e.preventDefault()}>
                                <img src={avatar} alt="..." />
                            </a>
                        </CardAvatar>
                        <CardBody profile>
                            <h6 className={classes.cardCategory}>Доцент /
                                Кандидат технических наук</h6>
                            <h4 className={classes.cardTitle}>Кочурко Павел
                                Анатольевич</h4>
                            <p className={classes.description}>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Distinctio nihil nobis
                                obcaecati repellat. A ad amet aspernatur beatae
                                distinctio earum, eum explicabo inventore itaque
                                iure, nemo officia quidem similique,
                                voluptatibus.
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
                                    <h3>Дисциплины</h3>
                                    "Системное программное обеспечение" (АСОИ);
                                    "Операционные системы" (ИИ); "Архитектура
                                    операционных систем", "Системное
                                    программирование", "Компьютерные сети"
                                    (ИПКиП).
                                    <h3>Научная деятельность</h3>
                                    Научные интересы: искусственный интеллект;
                                    нейронные сети; защита информации;
                                    обнаружение атак.
                                    <br />
                                    Кандидат технических наук по специальности
                                    05.13.19 - методы защиты информации и
                                    информационная безопасность. Тема
                                    диссертации: "Нейросетевые методы
                                    обнаружения атак на компьютерные системы".
                                    <h3>Интересы</h3>
                                    Практические интересы: интернет и сетевые
                                    технологии; дизайн и мультимедиа; системное
                                    программирование и администрирование; АСУ;
                                    управление проектами.
                                    <br />
                                    Хобби: интеллектуальные игры. Член
                                    центрального совета ОО "Белорусская лига
                                    интеллектуальных команд" от Брестской
                                    области.
                                    <h3>Образование</h3>
                                    2004 г. - БрГТУ, специальность АСОИ
                                    <br />
                                    2007 г. - аспирантура БрГТУ, специальность
                                    05.13.15 - вычислительные машины, системы и
                                    сети
                                    <h3>Контактная информация</h3>
                                    тел.: +375 29 7202122
                                    <br />
                                    e-mail: paulermo@gmail.com
                                    <br />
                                    skype: paulermo
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

export default withStyles(userProfileStyles)(UserProfile)
