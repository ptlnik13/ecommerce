import React, {useState} from 'react';
import FormInput from "../form-input/form-input.component";
import './sign-up.styles.scss';
import {connect} from "react-redux";
import CustomButton from "../custom-button/custom-button.component";
import {SignUpContainer, SignUpTitle} from "./sign-up.styles";
import {singUpStart} from "../../redux/user/user.action";


const SignUp = ({signUpStart}) => {
    const [userCredentials, setUserCredentials] = useState({displayName: '', email: '', password: '', confirmPassword: ''});

    const {displayName, email, password, confirmPassword} = userCredentials;

    const handleSubmit = async e => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert('Password not match');
            return;
        }
        signUpStart({displayName, email, password});
    }

    const handleChange = e => {
        const {name, value} = e.target;
        setUserCredentials({...userCredentials, [name]: value});
    }

    return (<SignUpContainer>
        <SignUpTitle>I do not have an account</SignUpTitle>
        <span>Sign up with your email and password</span>
        <form className='sign-up-form' onSubmit={handleSubmit}>
            <FormInput type='text' label='Display Name' value={displayName} name='displayName' onChange={handleChange} required/>
            <FormInput type='email' label='Email' value={email} name='email' onChange={handleChange} required/>
            <FormInput type='password' label='Password' value={password} name='password' onChange={handleChange} required/>
            <FormInput type='password' label='Confirm Password' value={confirmPassword} name='confirmPassword' onChange={handleChange} required/>
            <CustomButton type='submit'>Sign Up</CustomButton>
        </form>
    </SignUpContainer>)
}

const mapDispatchToProps = dispatch => ({
    signUpStart: userCredentials => dispatch(singUpStart(userCredentials))
})

export default connect(null, mapDispatchToProps)(SignUp);