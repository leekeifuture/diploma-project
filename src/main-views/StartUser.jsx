import React from 'react'
import Button from '../components/CustomButtons/Button'
import GridContainer from '../components/Grid/GridContainer'

class StartUser extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
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
                    color="rose"
                    size="lg"
                    style={style}
                >
                    Править информацию о себе
                </Button>
                <Button
                    color="rose"
                    size="lg"
                    style={style}
                >
                    Добавить преподавателя
                </Button>
                <Button
                    color="rose"
                    size="lg"
                    style={style}
                >
                    Добавить\править новость
                </Button>
                <Button
                    color="rose"
                    size="lg"
                    style={style}
                >
                    Загрузить\изменить материалы
                </Button>
                <Button
                    color="rose"
                    size="lg"
                    style={style}
                >
                    Править инофрмацию о преподавателе
                </Button>
            </GridContainer>
        )
    }
}

export default StartUser
