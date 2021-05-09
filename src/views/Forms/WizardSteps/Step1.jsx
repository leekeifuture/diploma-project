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

class Step1 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            facultyId: null,
            facultyShortName: null,
            faculties: []
        }
    }

    sendState() {
        return this.state
    }

    handleSimple = event => {
        this.setState({[event.target.name]: event.target.value})
    }
    handleChange = facultyObj => event => {
        localStorage.setItem('facultyId', facultyObj.id)
        setTimeout(() => {
            this.setState({facultyId: facultyObj.id})
            this.setState({facultyShortName: facultyObj.shortName})
        }, 100)
    }

    isValidated() {
        return this.state.facultyId != null
    }

    componentDidMount() {
        ibstu.getFaculties().then(faculties => {
                this.setState({faculties})
            }, error => {
                console.error(error)
            }
        )
    }

    render() {
        const faculties = this.state.faculties

        const {classes} = this.props
        return (
            <div>
                <h4 className={classes.infoText}>Выберите факультет</h4>
                <GridContainer justify="center">
                    <GridItem xs={12} sm={12} md={12} lg={10}>
                        <GridContainer>
                            {faculties.map((facultyObj, index) => {
                                const facultyIcon =
                                    facultiesToIcons.hasOwnProperty(facultyObj.shortName)
                                        ? facultiesToIcons[facultyObj.shortName]
                                        : 'graduation-cap'
                                return (
                                    <GridItem key={index} xs={12} sm={4}>
                                        <div className={classes.choiche}>
                                            <Checkbox
                                                checked={this.state.facultyId === facultyObj.id}
                                                tabIndex={-1}
                                                onClick={this.handleChange(facultyObj)}
                                                checkedIcon={
                                                    <i
                                                        className={
                                                            `fas fa-${facultyIcon} ${classes.iconCheckboxIcon}`
                                                        }
                                                    />
                                                }
                                                icon={
                                                    <i
                                                        className={
                                                            `fas fa-${facultyIcon} ${classes.iconCheckboxIcon}`
                                                        }
                                                    />
                                                }
                                                classes={{
                                                    checked: classes.iconCheckboxChecked,
                                                    root: classes.iconCheckbox
                                                }}
                                            />
                                            <h6>{facultyObj.name}</h6>
                                        </div>
                                    </GridItem>
                                )
                            })}
                        </GridContainer>
                    </GridItem>
                </GridContainer>
            </div>
        )
    }
}

export default withStyles(style)(Step1)
