import React from 'react'
import {NavLink} from 'react-router-dom'
import Button from '../components/CustomButtons/Button'
import GridContainer from '../components/Grid/GridContainer'
import GridItem from '../components/Grid/GridItem'

class StartUser extends React.Component {
    render() {
        const isAdmin = !(this.props.keycloak === null || !this.props.keycloak.tokenParsed.realm_access.roles.includes('ROLE_ADMIN'))
        const style = {width: '100%', height: 100, whiteSpace: 'normal'}
        return (
            <GridContainer justify="center">
                <GridItem xs={6}>
                    <NavLink to={'/auth-ibstu/materials-table'}
                             style={style}>
                        <Button
                            color="rose"
                            size="lg"
                            style={style}
                        >
                            Загрузить\изменить материалы
                        </Button>
                    </NavLink>
                    <NavLink to={'/auth-ibstu/edit-profile'}
                             style={style}>
                        <Button
                            color="rose"
                            size="lg"
                            style={style}
                        >
                            Править информацию о себе
                        </Button>
                    </NavLink>
                    {this.adminButtons(isAdmin)}
                </GridItem>
            </GridContainer>
        )
    }

    adminButtons(isAdmin) {
        const style = {width: '100%', height: 100, whiteSpace: 'normal'}
        if (isAdmin)
            return (
                <>
                    <NavLink to={'/auth-ibstu/register-page'}
                             style={style}>
                        <Button
                            color="rose"
                            size="lg"
                            style={style}
                        >
                            Добавить преподавателя
                        </Button>
                    </NavLink>
                    <NavLink to={'/auth-ibstu/news-table'}
                             style={style}>
                        <Button
                            color="rose"
                            size="lg"
                            style={style}
                        >
                            Добавить\править новость
                        </Button>
                    </NavLink>
                    <NavLink to={'/auth-ibstu/teachers-table'}
                             style={style}>
                        <Button
                            color="rose"
                            size="lg"
                            style={style}
                        >
                            Править информацию о преподавателе
                        </Button>
                    </NavLink>
                </>
            )
        return <></>
    }
}

export default StartUser
