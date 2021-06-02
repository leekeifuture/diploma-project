import FormControl from '@material-ui/core/FormControl'
import InputAdornment from '@material-ui/core/InputAdornment'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
// import LockOutline from "@material-ui/icons/LockOutline";
import Email from '@material-ui/icons/Email'
import Face from '@material-ui/icons/Face'
// @material-ui/icons
import registerPageStyle
    from 'assets/jss/material-dashboard-pro-react/views/registerPageStyle'
import Card from 'components/Card/Card.jsx'
import CardBody from 'components/Card/CardBody.jsx'
import Button from 'components/CustomButtons/Button.jsx'
import CustomInput from 'components/CustomInput/CustomInput.jsx'
// core components
import GridContainer from 'components/Grid/GridContainer.jsx'
import GridItem from 'components/Grid/GridItem.jsx'
import PropTypes from 'prop-types'
import React from 'react'
import {ibstu} from '../../api/ibstu-api'

class RegisterPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            faculties: [],
            facultyId: '',
            departments: [],
            departmentId: '',
            checked: [],
            simpleSelect: '',
            surname: '',
            name: '',
            middleName: '',
            email: ''
        }
        this.handleToggle = this.handleToggle.bind(this)
        this.onSurnameChange = this.onSurnameChange.bind(this)
        this.onNameChange = this.onNameChange.bind(this)
        this.onMiddleNameChange = this.onMiddleNameChange.bind(this)
        this.onEmailChange = this.onEmailChange.bind(this)
        this.onButtonClick = this.onButtonClick.bind(this)
        this.getDepartmentsComponent = this.getDepartmentsComponent.bind(this)
    }

    componentDidMount() {
        ibstu.getFaculties().then(faculties => {
                this.setState({faculties})
            }, error => {
                console.error(error)
            }
        )
    }

    handleSimple = event => {
        this.setState({[event.target.name]: event.target.value})
    }

    getDepartmentsComponent(classes, departments, departmentId) {
        if (this.state.facultyId !== '') {
            return (
                <GridItem xs={12} sm={12} md={12}
                          lg={12}>
                    <FormControl
                        fullWidth
                        className={classes.selectFormControl}
                    >
                        <InputLabel
                            htmlFor="simple-select"
                            className={classes.selectLabel}
                        >
                            Кафедра
                        </InputLabel>
                        <Select
                            MenuProps={{
                                className: classes.selectMenu
                            }}
                            classes={{
                                select: classes.select
                            }}
                            value={departmentId}
                            onChange={
                                (event) => {
                                    this.setState({departmentId: event.target.value})
                                }
                            }
                            inputProps={{
                                name: 'simpleSelect',
                                id: 'simple-select'
                            }}
                        >
                            {departments.map((department, index) => (
                                <MenuItem
                                    key={index}
                                    classes={{
                                        root: classes.selectMenuItem,
                                        selected: classes.selectMenuItemSelected
                                    }}
                                    value={department.id}
                                >
                                    {department.name}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </GridItem>
            )
        }
    }

    handleToggle(value) {
        const {checked} = this.state
        const currentIndex = checked.indexOf(value)
        const newChecked = [...checked]

        if (currentIndex === -1) {
            newChecked.push(value)
        } else {
            newChecked.splice(currentIndex, 1)
        }

        this.setState({
            checked: newChecked
        })
    }

    onSurnameChange(event) {
        this.setState({surname: event.target.value})
    }

    onNameChange(event) {
        this.setState({name: event.target.value})
    }

    onMiddleNameChange(event) {
        this.setState({middleName: event.target.value})
    }

    onEmailChange(event) {
        this.setState({email: event.target.value})
    }

    onButtonClick() {
        ibstu.registerUser(
            this.state.name,
            this.state.surname,
            this.state.middleName,
            this.state.email,
            this.state.departmentId,
            this.state.simpleSelect
        ).then(data => {
                alert('Зарегистрирован')
            }, error => {
                alert(error.message)
            }
        )
    }

    render() {
        const positions = {
            'HoD': 'Заведующий кафедрой',
            'DoTS': 'Доктор технических наук',
            'Docent': 'Доцент',
            'Assist': 'Ассистент',
            'SenLect': 'Старший преподаватель'
        }

        let buttonBlock = false
        if (this.state.surname === '' ||
            this.state.name === '' ||
            this.state.email === '' ||
            this.state.departmentId === '' ||
            this.state.simpleSelect === '') {
            buttonBlock = true
        }


        const {classes} = this.props
        return (
            <div className={classes.container}>
                <GridContainer justify="center">
                    <GridItem xs={12} sm={12} md={10}>
                        <Card className={classes.cardSignup}>
                            <h2 className={classes.cardTitle}>
                                Регистрация нового пользователя
                            </h2>
                            <CardBody>
                                <GridContainer justify="center">
                                    <GridItem xs={12} sm={8} md={5}>
                                        <form className={classes.form}>
                                            <CustomInput
                                                formControlProps={{
                                                    fullWidth: true,
                                                    className: classes.customFormControlClasses
                                                }}
                                                inputProps={{
                                                    onChange: this.onSurnameChange,
                                                    startAdornment: (
                                                        <InputAdornment
                                                            position="start"
                                                            className={classes.inputAdornment}
                                                        >
                                                            <Face
                                                                className={classes.inputAdornmentIcon} />
                                                        </InputAdornment>
                                                    ),
                                                    placeholder: 'Фамилия...'
                                                }}
                                            />
                                            <CustomInput
                                                formControlProps={{
                                                    fullWidth: true,
                                                    className: classes.customFormControlClasses
                                                }}
                                                inputProps={{
                                                    onChange: this.onNameChange,
                                                    startAdornment: (
                                                        <InputAdornment
                                                            position="start"
                                                            className={classes.inputAdornment}
                                                        >
                                                            <Face
                                                                className={classes.inputAdornmentIcon} />
                                                        </InputAdornment>
                                                    ),
                                                    placeholder: 'Имя...'
                                                }}
                                            />
                                            <CustomInput
                                                formControlProps={{
                                                    fullWidth: true,
                                                    className: classes.customFormControlClasses
                                                }}
                                                inputProps={{
                                                    onChange: this.onEmailChange,
                                                    startAdornment: (
                                                        <InputAdornment
                                                            position="start"
                                                            className={classes.inputAdornment}
                                                        >
                                                            <Email
                                                                className={classes.inputAdornmentIcon} />
                                                        </InputAdornment>
                                                    ),
                                                    placeholder: 'Email...'
                                                }}
                                            />
                                            <br />
                                            <br />
                                            <GridItem xs={12} sm={12} md={12}
                                                      lg={12}>
                                                <FormControl
                                                    fullWidth
                                                    className={classes.selectFormControl}
                                                >
                                                    <InputLabel
                                                        htmlFor="simple-select"
                                                        className={classes.selectLabel}
                                                    >
                                                        Факультет
                                                    </InputLabel>
                                                    <Select
                                                        MenuProps={{
                                                            className: classes.selectMenu
                                                        }}
                                                        classes={{
                                                            select: classes.select
                                                        }}
                                                        value={this.state.facultyId}
                                                        onChange={
                                                            (event) => {
                                                                this.setState({facultyId: event.target.value})
                                                                this.setState({departmentId: ''})
                                                                ibstu.getDepartments(event.target.value).then(departments => {
                                                                        this.setState({departments})
                                                                    }, error => {
                                                                        console.error(error)
                                                                    }
                                                                )
                                                            }
                                                        }
                                                        inputProps={{
                                                            name: 'simpleSelect',
                                                            id: 'simple-select'
                                                        }}
                                                    >
                                                        {this.state.faculties.map((faculty, index) => (
                                                            <MenuItem
                                                                key={index}
                                                                classes={{
                                                                    root: classes.selectMenuItem,
                                                                    selected: classes.selectMenuItemSelected
                                                                }}
                                                                value={faculty.id}
                                                            >
                                                                {faculty.name}
                                                            </MenuItem>
                                                        ))}
                                                    </Select>
                                                </FormControl>
                                            </GridItem>
                                            {this.getDepartmentsComponent(classes, this.state.departments, this.state.departmentId)}
                                            <br />
                                            <br />
                                            <GridItem xs={12} sm={12} md={12}
                                                      lg={12}>
                                                <FormControl
                                                    fullWidth
                                                    className={classes.selectFormControl}
                                                >
                                                    <InputLabel
                                                        htmlFor="simple-select"
                                                        className={classes.selectLabel}
                                                    >
                                                        Должность
                                                    </InputLabel>
                                                    <Select
                                                        MenuProps={{
                                                            className: classes.selectMenu
                                                        }}
                                                        classes={{
                                                            select: classes.select
                                                        }}
                                                        value={this.state.simpleSelect}
                                                        onChange={this.handleSimple}
                                                        inputProps={{
                                                            name: 'simpleSelect',
                                                            id: 'simple-select'
                                                        }}
                                                    >
                                                        {Object.keys(positions).map((position, index) => (
                                                            <MenuItem
                                                                key={index}
                                                                classes={{
                                                                    root: classes.selectMenuItem,
                                                                    selected: classes.selectMenuItemSelected
                                                                }}
                                                                value={position}
                                                            >
                                                                {positions[position]}
                                                            </MenuItem>
                                                        ))}
                                                    </Select>
                                                </FormControl>
                                            </GridItem>
                                            <br />
                                            <div className={classes.center}>
                                                <Button round color="primary"
                                                        onClick={this.onButtonClick}
                                                        disabled={buttonBlock}
                                                >
                                                    Зарегистрировать
                                                </Button>
                                            </div>
                                        </form>
                                    </GridItem>
                                </GridContainer>
                            </CardBody>
                        </Card>
                    </GridItem>
                </GridContainer>
            </div>
        )
    }
}

RegisterPage.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(registerPageStyle)(RegisterPage)
