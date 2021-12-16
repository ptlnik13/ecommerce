import React from 'react';
import FormInput from "../form-input/form-input.component";
import './sign-up.styles.scss';
import CustomButton from "../custom-button/custom-button.component";
import {auth, createUserProfileDocument} from "../../firebase/firebase.utils";
import {SignUpContainer, SignUpTitle} from "./sign-up.styles";

class SignUp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async e => {
        e.preventDefault();
        const {displayName, email, password, confirmPassword} = this.state;
        if (password !== confirmPassword) {
            alert('Password not match');
            return;
        }
        try {
            const {user} = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(user, {displayName});

            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })

        } catch (e) {
            console.log(e.message);
        }


    }

    handleChange = e => {
        const {name, value} = e.target;
        this.setState({[name]: value});
    }

    render() {
        return (
            <SignUpContainer>
                <SignUpTitle>I do not have an account</SignUpTitle>
                <span>Sign up with your email and password</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput type='text' label='Display Name' value={this.state.displayName} name='displayName' onChange={this.handleChange} required/>
                    <FormInput type='email' label='Email' value={this.state.email} name='email' onChange={this.handleChange} required/>
                    <FormInput type='password' label='Password' value={this.state.password} name='password' onChange={this.handleChange} required/>
                    <FormInput type='password' label='Confirm Password' value={this.state.confirmPassword} name='confirmPassword' onChange={this.handleChange} required/>
                    <CustomButton type='submit'>Sign Up</CustomButton>
                </form>
            </SignUpContainer>
        )
    }
}

export default SignUp;