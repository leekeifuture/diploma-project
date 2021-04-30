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
import {faculties, facultiesToReadable} from '../../../constants'

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
        this.setState({faculty: name})
    }

    isValidated() {
        return this.state.faculty != null
    }

    render() {
        const {classes} = this.props
        return (
            <div>
                <h4 className={classes.infoText}>Выберите факультет</h4>
                <GridContainer justify="center">
                    <GridItem xs={12} sm={12} md={12} lg={10}>
                        <GridContainer>
                            {faculties.map((faculty, index) => (
                                <GridItem key={index} xs={12} sm={4}>
                                    <div className={classes.choiche}>
                                        <Checkbox
                                            checked={this.state.faculty === faculty}
                                            tabIndex={-1}
                                            onClick={this.handleChange(faculty)}
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
                                        <h6>{facultiesToReadable[faculty]}</h6>
                                    </div>
                                </GridItem>
                            ))}
                        </GridContainer>
                    </GridItem>
                </GridContainer>
            </div>
        )
    }
}

export default withStyles(style)(Step1)
