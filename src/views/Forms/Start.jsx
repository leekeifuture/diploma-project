import GridContainer from 'components/Grid/GridContainer.jsx'
import GridItem from 'components/Grid/GridItem.jsx'
// core components
import Wizard from 'components/Wizard/Wizard.jsx'
import React from 'react'

import Step1 from './WizardSteps/Step1.jsx'
import Step2 from './WizardSteps/Step2.jsx'

class Start extends React.Component {
    finishButtonClick(e) {
        localStorage.setItem('facultyId', e.faculty.facultyId)
        localStorage.setItem('departmentId', e.department.departmentId)
        localStorage.setItem('departmentName', e.department.departmentName)

        window.location.href = 'http://localhost:3000/ibstu/menu'
    }

    render() {
        return (
            <GridContainer justify="center">
                <GridItem xs={12} sm={8}>
                    <Wizard
                        validate
                        steps={[
                            {
                                stepName: 'Факультет',
                                stepComponent: Step1,
                                stepId: 'faculty'
                            },
                            {
                                stepName: 'Кафедра',
                                stepComponent: Step2,
                                stepId: 'department'
                            }
                        ]}
                        title="Добро пожаловать!"
                        subtitle="Эта информация позволит нам узнать о вас больше."
                        finishButtonClick={e => this.finishButtonClick(e)}
                    />
                </GridItem>
            </GridContainer>
        )
    }
}

export default Start
