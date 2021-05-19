import withStyles from '@material-ui/core/styles/withStyles'

import dashboardStyle
    from 'assets/jss/material-dashboard-pro-react/views/dashboardStyle'
import PropTypes from 'prop-types'
import React from 'react'
import {baseURL, ibstu} from '../../api/ibstu-api'
import newsImage from '../../assets/img/news.png'
import Card from '../../components/Card/Card'
import CardBody from '../../components/Card/CardBody'
import CardHeader from '../../components/Card/CardHeader'
import GridContainer from '../../components/Grid/GridContainer'
import GridItem from '../../components/Grid/GridItem'

class NewsContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            news: null,
            newsContent: []
        }
    }

    componentDidMount() {
        const departmentId = localStorage.getItem('departmentId')
        ibstu.getNews(departmentId).then(news => {
                this.setState({newsContent: news.content})
                this.setState({news})
            }, error => {
                console.error(error)
            }
        )
    }

    render() {
        const department = localStorage.getItem('departmentName')
            .replace('Кафедра', 'кафедры')

        const {classes} = this.props
        return (
            <div>
                <h3>Новости {department}</h3>
                <GridContainer>
                    {this.state.newsContent.map((news, index) => {
                        const newsPicture = news.imageUrl
                            ? `${baseURL}/static-files/news/${news.id}/image.png`
                            : newsImage
                        return (
                            <GridItem key={index} xs={12} sm={12} md={2}>
                                <Card product className={classes.cardHover}>
                                    <CardHeader
                                        className={classes.cardHeaderHover}>
                                        <a href="#pablo"
                                           onClick={e => {
                                               e.preventDefault()
                                               window.location.href = 'http://localhost:3000/ibstu/new/' + news.id
                                           }}>
                                            <img src={newsPicture} alt="..."
                                                 style={{
                                                     maxWidth: '100%',
                                                     maxHeight: '100%'
                                                 }} />
                                        </a>
                                    </CardHeader>
                                    <CardBody>
                                        <h4 className={classes.cardProductTitle}>
                                            <a href="#pablo"
                                               onClick={e => {
                                                   e.preventDefault()
                                                   window.location.href = 'http://localhost:3000/ibstu/new/' + news.id
                                               }}>
                                                {news.header}
                                            </a>
                                        </h4>
                                    </CardBody>
                                </Card>
                            </GridItem>
                        )
                    })}
                </GridContainer>
            </div>
        )
    }
}

NewsContainer.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(dashboardStyle)(NewsContainer)
