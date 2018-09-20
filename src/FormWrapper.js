import React, {Component} from 'react'

class FormWrapper extends Component {
    state = {
        error: {},
        errorResponse: null
    };

    handleChange(event) {
        return {[event.target.name]: event.target.value}
    }

    handleInvalid(event) {
        let {error, errorResponse} = this.state;

        if (!event.target.value) {
            errorResponse = () => (
                <p style={{fontWeight: 'bold', color: 'red'}}>Field can not be empty</p>
            );
        }

        this.setState({
            error: Object.assign(
                {},
                error,
                {
                    [event.target.name]: true,
                    errorResponse,
                }
            )
        })
    }

    handleBlur(event) {
        if (event.target.value) {
            this.setState({
                error : Object.assign(
                    {},
                    this.state.error,
                    {
                        [event.target.name]: false,
                        response: null,
                    }
                )
            })
        }
    }

    render() {

        const propsToPass = {
            handleChange: this.handleChange,
            handleInvalid: this.handleInvalid.bind(this),
            handleBlur: this.handleBlur.bind(this),
            state: this.state,
        }

        const {errorResponse : ErrorResponse} = this.state.error;

        return (
            <div>
                <h1>This is the form wrapper</h1>
                {
                    ErrorResponse
                    && <ErrorResponse />
                }

                {
                    this.props.children(propsToPass)
                }

            </div>
        )
    }

}

export default FormWrapper;