import React, { Component } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            errorText: ""
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    } 

    handleSubmit(event) {
        axios.post('https://api.devcamp.space/sessions', 
        {
            client: {
                email: this.state.email,
                password: this.state.password
            }
        },
        { withCredentials: true }
        ).then(response => {
            if (response.data.status === 'created') {
                this.props.handleSuccessfulAuth()
                // this.setState({
                //     errorText:"welcome!"
                // })
            } else {
                this.setState({
                    errorText:"wrong email or password foo!"
                })
                this.props.handleUnsuccessfulAuth()
            }

        }).catch(error => {
            console.log("some error occured, hmmm...", error)
            this.setState({
                errorText: "An error occured with the site dawg"
            })
            this.props.handleSuccessfulAuth()
            
        })

        event.preventDefault();
    }
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return(
            <div>
                <h2>Login To Access Your Dashboard</h2>

                <div>
                    {this.state.errorText}
                </div>
                

                <form onSubmit={this.handleSubmit} className="auth-form-wrapper">
                    <div className="form-group">
                        <FontAwesomeIcon icon="envelope" />
                        <input 
                            type='email'
                            name='email'
                            placeholder='Your email'
                            value={this.state.email}
                            onChange={this.handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <FontAwesomeIcon icon="lock" />
                        <input 
                            type='password'
                            name='password'
                            placeholder='Password'
                            value={this.state.password}
                            onChange={this.handleChange} 
                        />
                    </div>

                    <button type='submit' className="btn">Login</button>
                    
                </form>
            </div>
        )
    }
}
