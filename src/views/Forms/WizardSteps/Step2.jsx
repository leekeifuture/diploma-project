import Checkbox from '@material-ui/core/Checkbox'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
import customCheckboxRadioSwitch
    from 'assets/jss/material-dashboard-pro-react/customCheckboxRadioSwitch.jsx'

import customSelectStyle
    from 'assets/jss/material-dashboard-pro-react/customSelectStyle.jsx'
// core components
import GridContainer from 'components/Grid/GridContainer.jsx'
import GridItem from 'components/Grid/GridItem.jsx'
import React from 'react'

const style = {
    infoText: {
        fontWeight: '300',
        margin: '10px 0 30px',
        textAlign: 'center'
    },
    inputAdornmentIcon: {
        color: '#555'
    },
    choiche: {
        textAlign: 'center',
        cursor: 'pointer',
        marginTop: '20px'
    },
    ...customSelectStyle,
    ...customCheckboxRadioSwitch
}

class Step2 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            simpleSelect: '',
            desgin: false,
            code: false,
            develop: false,
            faculty: null
        }
    }

    sendState() {
        return this.state
    }

    handleSimple = event => {
        this.setState({[event.target.name]: event.target.value})
    }
    handleChange = name => event => {
        this.setState({[name]: event.target.checked})
    }

    isValidated() {
        return true
    }

    render() {
        const chairsToFaculties = {
            'building': [
                'Архитектура',
                'Геотехника и транспортные коммуникации',
                'Строительные конструкции',
                'Технология бетона и строительных материалов',
                'Технология строительного производства',
                'Экономика и организация строительства',
                'Физическое воспитание и спорт'
            ],
            'leaf': [
                'Водоснабжение',
                'Теплогазоснабжение',
                'Природоохранная деятельность',
                'Мелиорация',
                'Экология'
            ],
            'cogs': [
                'Автоматизация технологических процессов',
                'Машиноведение',
                'Прикладная механика',
                'Машиностроение и эксплуатация автомобилей',
                'Гуманитарные науки'
            ],
            'calculator': [
                'Бухгалтерский учет',
                'Иностранные языки',
                'Информатика и прикладная математика',
                'Менеджмент',
                'Мировая экономика',
                'Экономическая теория и логистика'
            ],
            'code': [
                'Интеллектуальные информационные технологии',
                'ЭВМ и системы',
                'Высшая математика',
                'Физика'
            ],
            'graduation-cap': [
                'Управление, экономика и финансы',
                'Белорусский и русский языки'
            ]
        }

        const faculty = Object.keys(this.props.allStates).length !== 0
            ? this.props.allStates.faculty.faculty
            : 'building'

        const {classes} = this.props
        return (
            <div>
                <h4 className={classes.infoText}>Выберите кафедру</h4>
                <GridContainer justify="center">
                    <GridItem xs={12} sm={12} md={12} lg={10}>
                        <GridContainer>
                            {chairsToFaculties[faculty].map((chair, index) => (
                                    <GridItem key={index} xs={12} sm={4}>
                                        <div className={classes.choiche}>
                                            <Checkbox
                                                tabIndex={-1}
                                                onClick={this.handleChange(index)}
                                                checkedIcon={
                                                    <i
                                                        className={
                                                            `fas fa-${faculty} ${classes.iconCheckboxIcon}`
                                                        }
                                                    />
                                                }
                                                icon={
                                                    <i
                                                        className={
                                                            `fas fa-${faculty} ${classes.iconCheckboxIcon}`
                                                        }
                                                    />
                                                }
                                                classes={{
                                                    checked: classes.iconCheckboxChecked,
                                                    root: classes.iconCheckbox
                                                }}
                                            />
                                            <h6>{chair}</h6>
                                        </div>
                                    </GridItem>
                                )
                            )}
                        </GridContainer>
                    </GridItem>
                </GridContainer>
            </div>
        )
    }
}

export default withStyles(style)(Step2)
