import Keycloak from 'keycloak-js'
import React from 'react'
import {NavLink} from 'react-router-dom'
import Button from '../components/CustomButtons/Button'
import GridContainer from '../components/Grid/GridContainer'
import GridItem from '../components/Grid/GridItem'

class StartUser extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            keycloak: null,
            authenticated: false
        }
    }

    componentDidMount() {
        const keycloak = Keycloak('/keycloak.json')
        keycloak.init({onLoad: 'login-required'})
            .then(authenticated => {
                localStorage.setItem('token', keycloak.token)
                this.setState({keycloak, authenticated})
            })
    }

    render() {
        const isAdmin = !(this.state.keycloak === null || !this.state.keycloak.tokenParsed.realm_access.roles.includes('ROLE_ADMIN'))
        const style = {width: '100%', height: 100, whiteSpace: 'normal'}
        return (
            <GridContainer justify="center">
                <GridItem xs={6}>
                    <NavLink to={'/ibstu/table'}
                             style={style}>
                        <Button
                            color="rose"
                            size="lg"
                            style={style}
                        >
                            Загрузить\изменить материалы
                        </Button>
                    </NavLink>
                    <NavLink to={'/ibstu/edit-profile'}
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
                    <NavLink to={'/auth/register-page'}
                             style={style}>
                        <Button
                            color="rose"
                            size="lg"
                            style={style}
                        >
                            Добавить преподавателя
                        </Button>
                    </NavLink>
                    <NavLink to={'/ibstu/edit-news'}
                             style={style}>
                        <Button
                            color="rose"
                            size="lg"
                            style={style}
                        >
                            Добавить\править новость
                        </Button>
                    </NavLink>
                    <NavLink to={'/ibstu/table'}
                             style={style}>
                        <Button
                            color="rose"
                            size="lg"
                            style={style}
                        >
                            Загрузить\изменить материалы
                        </Button>
                    </NavLink>
                    <NavLink to={'/ibstu/edit-teachers'}
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
