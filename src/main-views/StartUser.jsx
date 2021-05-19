import Keycloak from 'keycloak-js'
import React from 'react'
import Button from '../components/CustomButtons/Button'
import GridContainer from '../components/Grid/GridContainer'

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
        const style = {width: '50%', height: 100, whiteSpace: 'normal'}
        return (
            <GridContainer justify="center">
                <Button
                    onClick={e => {
                        e.preventDefault()
                        window.location.href = 'http://localhost:3000/ibstu/table'
                    }}
                    color="rose"
                    size="lg"
                    style={style}
                >
                    Загрузить\изменить материалы
                </Button>
                <Button
                    onClick={e => {
                        e.preventDefault()
                        window.location.href = 'http://localhost:3000/ibstu/edit-profile'
                    }}
                    color="rose"
                    size="lg"
                    style={style}
                >
                    Править информацию о себе
                </Button>
                {this.adminButtons(isAdmin)}
            </GridContainer>
        )
    }

    adminButtons(isAdmin) {
        const style = {width: '50%', height: 100, whiteSpace: 'normal'}
        if (isAdmin)
            return (
                <>
                    <Button
                        onClick={e => {
                            e.preventDefault()
                            window.location.href = 'http://localhost:3000/auth/register-page'
                        }}
                        color="rose"
                        size="lg"
                        style={style}
                    >
                        Добавить преподавателя
                    </Button>
                    <Button
                        onClick={e => {
                            e.preventDefault()
                            window.location.href = 'http://localhost:3000/ibstu/edit-news'
                        }}
                        color="rose"
                        size="lg"
                        style={style}
                    >
                        Добавить\править новость
                    </Button>
                    <Button
                        onClick={e => {
                            e.preventDefault()
                            window.location.href = 'http://localhost:3000/ibstu/table'
                        }}
                        color="rose"
                        size="lg"
                        style={style}
                    >
                        Загрузить\изменить материалы
                    </Button>
                    <Button
                        onClick={e => {
                            e.preventDefault()
                            window.location.href = 'http://localhost:3000/ibstu/edit-teachers'
                        }}
                        color="rose"
                        size="lg"
                        style={style}
                    >
                        Править информацию о преподавателе
                    </Button>
                </>
            )
        return <></>
    }
}

export default StartUser
