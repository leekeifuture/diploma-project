import defaultImage from 'assets/img/image_placeholder.jpg'
import defaultAvatar from 'assets/img/placeholder.jpg'
// core components
import Button from 'components/CustomButtons/Button.jsx'
// used for making the prop types of this component
import PropTypes from 'prop-types'
import React from 'react'
import materialsImage from '../../assets/img/material.png'

class ImageUpload extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            file: null,
            imagePreviewUrl: this.props.avatar ? defaultAvatar : defaultImage
        }
        this.handleImageChange = this.handleImageChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.handleRemove = this.handleRemove.bind(this)
    }

    handleImageChange(e) {
        e.preventDefault()
        let reader = new FileReader()
        let file = e.target.files[0]
        reader.onloadend = () => {
            this.props.t.setState({
                file: file,
                imagePreviewUrl: reader.result
            })
            this.setState({
                file: file,
                imagePreviewUrl: reader.result
            })
        }
        reader.readAsDataURL(file)
    }

    handleSubmit(e) {
        e.preventDefault()
        // this.state.file is the file/image uploaded
        // in this function you can save the image (this.state.file) on form submit
        // you have to call it yourself
    }

    handleClick() {
        this.refs.fileInput.click()
    }

    handleRemove() {
        this.setState({
            file: null,
            imagePreviewUrl: this.props.avatar ? defaultAvatar : defaultImage
        })
        this.refs.fileInput.value = null
    }

    render() {
        var {
            avatar,
            addButtonProps,
            changeButtonProps,
            removeButtonProps
        } = this.props
        return (
            <div className="fileinput text-center">
                <input type="file" onChange={this.handleImageChange}
                       ref="fileInput" />
                <div className={'thumbnail' + (avatar ? ' img-circle' : '')}>
                    <img src={materialsImage} alt="..." />
                </div>
                <div>
                    {this.state.file === null ? (
                        <Button {...addButtonProps}
                                onClick={() => this.handleClick()}>
                            {avatar ? 'Выбрать файл >>' : 'Выбрать файл >>'}
                        </Button>
                    ) : (
                        <span>
              <Button {...changeButtonProps} onClick={() => this.handleClick()}>
                Изменить
              </Button>
                            {avatar ? <br /> : null}
                            <Button
                                {...removeButtonProps}
                                onClick={() => this.handleRemove()}
                            >
                <i className="fas fa-times" /> Удалить
              </Button>
            </span>
                    )}
                </div>
            </div>
        )
    }
}

ImageUpload.propTypes = {
    avatar: PropTypes.bool,
    addButtonProps: PropTypes.object,
    changeButtonProps: PropTypes.object,
    removeButtonProps: PropTypes.object
}

export default ImageUpload
