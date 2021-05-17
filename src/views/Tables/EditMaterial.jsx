// @material-ui/core components
// @material-ui/icons
import PermIdentity from '@material-ui/icons/PermIdentity'
import Card from 'components/Card/Card.jsx'
import CardBody from 'components/Card/CardBody.jsx'
import CardHeader from 'components/Card/CardHeader.jsx'
import CardIcon from 'components/Card/CardIcon.jsx'
import Clearfix from 'components/Clearfix/Clearfix.jsx'
import Button from 'components/CustomButtons/Button.jsx'
import CustomInput from 'components/CustomInput/CustomInput.jsx'
// core components
import GridContainer from 'components/Grid/GridContainer.jsx'
import GridItem from 'components/Grid/GridItem.jsx'
import React from 'react'
import {ibstu} from '../../api/ibstu-api'
import userProfileStyles
    from '../../assets/jss/material-dashboard-pro-react/views/userProfileStyles'
import ImageUpload from '../../components/CustomUpload/ImageUpload'

class EditMaterial extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            materialHeader: '',
            materialDescription: '',
            material: null,
            file: null
        }
        this.buttonIsClicked = this.buttonIsClicked.bind(this)
    }

    componentDidMount() {
        ibstu.getMaterial(this.props.match.params.materialId)
            .then(material => {
                    this.setState({materialHeader: material.header})
                    this.setState({materialDescription: material.description})
                    this.setState({material})
                }, error => {
                    console.error(error)
                }
            )
    }

    buttonIsClicked() {
        ibstu.updateMaterial(
            this.state.materialHeader,
            this.state.materialDescription,
            this.props.match.params.materialId,
            this.state.file
        ).then(data => {
                alert('Изменено')
            }, error => {
                alert(error.message)
            }
        )
    }

    render() {
        if (this.state.material === null) return <></>
        const ln = this.state.material.lastName ? this.state.material.lastName : ''
        const fn = this.state.material.firstName ? this.state.material.firstName : ''
        const md = this.state.material.middleName ? this.state.material.middleName : ''
        const creator = `${ln} ${fn} ${md}`
        return (
            <div>
                <GridContainer>
                    <GridItem xs={12} sm={12} md={12}>
                        <Card>
                            <CardHeader color="rose" icon>
                                <CardIcon color="rose">
                                    <PermIdentity />
                                </CardIcon>
                                <h4>
                                    Обновить материал
                                </h4>
                            </CardHeader>
                            <CardBody>
                                <GridContainer>
                                    <GridItem xs={12} sm={12} md={12}>
                                        <CustomInput
                                            labelText={'Создатель: ' + creator}
                                            id="company-disabled"
                                            formControlProps={{
                                                fullWidth: true
                                            }}
                                            inputProps={{
                                                disabled: true
                                            }}
                                        />
                                    </GridItem>
                                </GridContainer>
                                <GridContainer>
                                    <GridItem xs={12} sm={12} md={12}>
                                        <CustomInput
                                            inputProps={{
                                                value: this.state.materialHeader,
                                                onChange: (event) => this.setState({materialHeader: event.target.value})
                                            }}
                                            labelText="Заголовок"
                                            id="first-name"
                                            formControlProps={{
                                                fullWidth: true
                                            }}
                                        />
                                    </GridItem>
                                </GridContainer>
                                <GridContainer>
                                    <GridItem xs={12} sm={12} md={12}>
                                        <CustomInput
                                            labelText="Описание"
                                            id="about-me"
                                            formControlProps={{
                                                fullWidth: true
                                            }}
                                            inputProps={{
                                                value: this.state.materialDescription,
                                                onChange: (event) => this.setState({materialDescription: event.target.value}),
                                                multiline: true,
                                                rows: 5
                                            }}
                                        />
                                    </GridItem>
                                </GridContainer>
                                <GridContainer>
                                    <GridItem xs={12} sm={12} md={12}>
                                        <ImageUpload t={this} />
                                    </GridItem>
                                </GridContainer>
                                <Button color="rose"
                                        className={userProfileStyles.updateProfileButton}
                                        onClick={this.buttonIsClicked}>
                                    Обновить материал
                                </Button>
                                <Clearfix />
                            </CardBody>
                        </Card>
                    </GridItem>
                </GridContainer>
            </div>
        )
    }
}

export default EditMaterial
