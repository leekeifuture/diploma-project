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
import {ibstu} from '../../../api/ibstu-api'
import {facultiesToIcons} from '../../../constants'

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
            departmentId: null,
            departmentName: null,
            departments: []
        }
    }

    sendState() {
        return this.state
    }

    handleSimple = event => {
        this.setState({[event.target.name]: event.target.value})
    }
    handleChange = (departmentId, departmentName) => event => {
        this.setState({departmentId, departmentName})
    }

    isValidated() {
        return this.state.departmentId != null
    }

    getDepartments(facultyId) {
        ibstu.getDepartments(facultyId).then(departments => {
                this.setState({departments})
            }, error => {
                console.error(error)
            }
        )
    }

    componentDidMount() {
        const facultyId = localStorage.getItem('facultyId')
        this.getDepartments(facultyId)
    }

    componentDidUpdate(prevProps, prevState) {
        if (
            prevProps.allStates.hasOwnProperty('faculty') &&
            prevProps.allStates.faculty.facultyId !== this.props.allStates.faculty.facultyId
        ) {
            const facultyId = this.props.allStates.faculty.facultyId
            this.getDepartments(facultyId)
        }
    }

    render() {
        let facultyId = 0
        if (this.state.departments.length === 0 && this.props.allStates.faculty) {
            facultyId = this.props.allStates.faculty.facultyId
            this.getDepartments(facultyId)
        }

        const {classes} = this.props
        return (
            <div>
                <h4 className={classes.infoText}>Выберите кафедру</h4>
                <GridContainer justify="center">
                    <GridItem xs={12} sm={12} md={12} lg={10}>
                        <GridContainer>
                            {this.state.departments.map((departmentObj, index) => {
                                    if (Object.keys(this.props.allStates).length === 0) {
                                        return <div key={index} />
                                    }

                                    const departmentIcon =
                                        facultiesToIcons.hasOwnProperty(this.props.allStates.faculty.facultyShortName)
                                            ? facultiesToIcons[this.props.allStates.faculty.facultyShortName]
                                            : 'graduation-cap'
                                    return (
                                        <GridItem key={index} xs={12} sm={4}>
                                            <div className={classes.choiche}>
                                                <Checkbox
                                                    checked={this.state.departmentId === departmentObj.id}
                                                    tabIndex={-1}
                                                    onClick={this.handleChange(departmentObj.id, departmentObj.name)}
                                                    checkedIcon={
                                                        <i
                                                            className={
                                                                `fas fa-${departmentIcon} ${classes.iconCheckboxIcon}`
                                                            }
                                                        />
                                                    }
                                                    icon={
                                                        <i
                                                            className={
                                                                `fas fa-${departmentIcon} ${classes.iconCheckboxIcon}`
                                                            }
                                                        />
                                                    }
                                                    classes={{
                                                        checked: classes.iconCheckboxChecked,
                                                        root: classes.iconCheckbox
                                                    }}
                                                />
                                                <h6>{departmentObj.name}</h6>
                                            </div>
                                        </GridItem>
                                    )
                                }
                            )}
                        </GridContainer>
                    </GridItem>
                </GridContainer>
            </div>
        )
    }
}

export default withStyles(style)(Step2)
