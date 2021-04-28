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

class Step1 extends React.Component {
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
        this.setState({faculty: name})
    }

    isValidated() {
        return true
    }

    render() {
        const {classes} = this.props
        return (
            <div>
                <h4 className={classes.infoText}>Выберите факультет</h4>
                <GridContainer justify="center">
                    <GridItem xs={12} sm={12} md={12} lg={10}>
                        <GridContainer>
                            <GridItem xs={12} sm={4}>
                                <div className={classes.choiche}>
                                    <Checkbox
                                        tabIndex={-1}
                                        onClick={this.handleChange('building')}
                                        checkedIcon={
                                            <i
                                                className={
                                                    'fas fa-building ' + classes.iconCheckboxIcon
                                                }
                                            />
                                        }
                                        icon={
                                            <i
                                                className={
                                                    'fas fa-building ' + classes.iconCheckboxIcon
                                                }
                                            />
                                        }
                                        classes={{
                                            checked: classes.iconCheckboxChecked,
                                            root: classes.iconCheckbox
                                        }}
                                    />
                                    <h6>Строительный</h6>
                                </div>
                            </GridItem>
                            <GridItem xs={12} sm={4}>
                                <div className={classes.choiche}>
                                    <Checkbox
                                        tabIndex={-1}
                                        onClick={this.handleChange('leaf')}
                                        checkedIcon={
                                            <i
                                                className={
                                                    'fas fa-leaf ' + classes.iconCheckboxIcon
                                                }
                                            />
                                        }
                                        icon={
                                            <i
                                                className={
                                                    'fas fa-leaf ' + classes.iconCheckboxIcon
                                                }
                                            />
                                        }
                                        classes={{
                                            checked: classes.iconCheckboxChecked,
                                            root: classes.iconCheckbox
                                        }}
                                    />
                                    <h6>Инженерных систем и экологии</h6>
                                </div>
                            </GridItem>
                            <GridItem xs={12} sm={4}>
                                <div className={classes.choiche}>
                                    <Checkbox
                                        tabIndex={-1}
                                        onClick={this.handleChange('cogs')}
                                        checkedIcon={
                                            <i
                                                className={
                                                    'fas fa-cogs ' + classes.iconCheckboxIcon
                                                }
                                            />
                                        }
                                        icon={
                                            <i
                                                className={
                                                    'fas fa-cogs ' + classes.iconCheckboxIcon
                                                }
                                            />
                                        }
                                        classes={{
                                            checked: classes.iconCheckboxChecked,
                                            root: classes.iconCheckbox
                                        }}
                                    />
                                    <h6>Машиностроительный</h6>
                                </div>
                            </GridItem>
                            <GridItem xs={12} sm={4}>
                                <div className={classes.choiche}>
                                    <Checkbox
                                        tabIndex={-1}
                                        onClick={this.handleChange('calculator')}
                                        checkedIcon={
                                            <i
                                                className={
                                                    'fas fa-calculator ' + classes.iconCheckboxIcon
                                                }
                                            />
                                        }
                                        icon={
                                            <i
                                                className={
                                                    'fas fa-calculator ' + classes.iconCheckboxIcon
                                                }
                                            />
                                        }
                                        classes={{
                                            checked: classes.iconCheckboxChecked,
                                            root: classes.iconCheckbox
                                        }}
                                    />
                                    <h6>Экономический</h6>
                                </div>
                            </GridItem>
                            <GridItem xs={12} sm={4}>
                                <div className={classes.choiche}>
                                    <Checkbox
                                        tabIndex={-1}
                                        onClick={this.handleChange('code')}
                                        checkedIcon={
                                            <i
                                                className={
                                                    'fas fa-code ' + classes.iconCheckboxIcon
                                                }
                                            />
                                        }
                                        icon={
                                            <i
                                                className={
                                                    'fas fa-code ' + classes.iconCheckboxIcon
                                                }
                                            />
                                        }
                                        classes={{
                                            checked: classes.iconCheckboxChecked,
                                            root: classes.iconCheckbox
                                        }}
                                    />
                                    <h6>Электронно-информационных систем</h6>
                                </div>
                            </GridItem>
                            <GridItem xs={12} sm={4}>
                                <div className={classes.choiche}>
                                    <Checkbox
                                        tabIndex={-1}
                                        onClick={this.handleChange('graduation-cap')}
                                        checkedIcon={
                                            <i
                                                className={'fas fa-graduation-cap ' + classes.iconCheckboxIcon}
                                            />
                                        }
                                        icon={
                                            <i
                                                className={'fas fa-graduation-cap ' + classes.iconCheckboxIcon}
                                            />
                                        }
                                        classes={{
                                            checked: classes.iconCheckboxChecked,
                                            root: classes.iconCheckbox
                                        }}
                                    />
                                    <h6>Инженерно-экономический факультет
                                        заочного образования</h6>
                                </div>
                            </GridItem>
                        </GridContainer>
                    </GridItem>
                </GridContainer>
            </div>
        )
    }
}

export default withStyles(style)(Step1)
