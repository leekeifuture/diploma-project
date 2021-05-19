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
import {baseURL, ibstu} from '../../api/ibstu-api'

import newsImage from '../../assets/img/news.png'

class NewContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            newObj: null
        }
    }

    componentDidMount() {
        ibstu.getNew(this.props.match.params.newsId).then(newObj => {
                this.setState({newObj})
            }, error => {
                console.error(error)
            }
        )
    }

    render() {
        const newObj = this.state.newObj
        if (newObj === null) {
            return <></>
        }

        const newsPicture = newObj.imageUrl
            ? `${baseURL}/static-files/news/${newObj.id}/image.png`
            : newsImage
        const ln = newObj.lastName
            ? newObj.lastName
            : ''
        const fn = newObj.firstName
            ? newObj.firstName
            : ''
        const md = newObj.middleName
            ? newObj.middleName
            : ''

        const content = newObj.content === '' || newObj.content === null
            ? 'Информация отсутствует'
            : newObj.content

        const {classes} = this.props
        return (
            <div>
                <GridContainer>
                    <GridItem xs={12} sm={12} md={4}>
                        <Card profile>
                            <a href=""
                               onClick={e => e.preventDefault()}>
                                <img src={newsPicture} alt="..."
                                     style={{
                                         maxWidth: '200%',
                                         maxHeight: '200%'
                                     }} />
                            </a>
                            <CardBody profile>
                                <h6 className={classes.cardCategory}>
                                    {newObj.createdAt}
                                </h6>
                                <h4 className={classes.cardTitle}>
                                    {newObj.header}
                                </h4>
                                <p className={classes.description}>
                                    {`Создатель: ${ln} ${fn} ${md}`}
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
                                        {content}
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

}

export default withStyles(userProfileStyles)(NewContainer)
