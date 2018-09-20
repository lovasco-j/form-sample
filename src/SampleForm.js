import React, {Component} from 'react'
import './SampleForm.css';

class SampleForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
        }

    }

    /**
     * Helper function for setting state.
     *
     * @param eventCallBack
     * @param event
     */
    wrapper(eventCallBack, event) {
        this.setState(eventCallBack(event))
    }

    handleSubmit(e) {
        e.preventDefault();
    }

    render() {

        // Creates a partial application.
        // The event object is curried to callback we are passing here.
        const handleChange = this.wrapper.bind(this, this.props.handleChange);

        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="email">
                    Email:
                    <input
                        name='email'
                        type="email"
                        onChange={handleChange}
                        onInvalid={this.props.handleInvalid}
                        onBlur={this.props.handleBlur}
                        className={this.props.state.error.email ? 'error' : ''}
                        style={{
                            display: 'block',
                            marginBottom: '10px',
                        }}
                        required
                    />
                </label>
                <input type="submit" value='Submit'/>
            </form>
        )
    }
}

export default SampleForm;
