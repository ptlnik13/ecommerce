import React, {useState} from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import {ButtonsBarContainer, SignInContainer, SignInTitle} from "./sign-in.styles";
import {googleSignInStart, emailSignInStart} from "../../redux/user/user.action";
import {useDispatch} from "react-redux";

const SignIn = () => {

    const dispatch = useDispatch();

    const [userCredentials, setCredentials] = useState({email: '', password: ''});

    const {email, password} = userCredentials;

    const handleSubmit = async e => {
        e.preventDefault();
        dispatch(emailSignInStart({email, password}));
    }
    const handleChange = e => {
        const {value, name} = e.target;

        setCredentials({...userCredentials, [name]: value})
    }
    return (<SignInContainer>
        <SignInTitle>I already have an account</SignInTitle>
        <span>Sign in with your email and password</span>

        <form onSubmit={handleSubmit}>
            <FormInput type='email' name='email' value={email} onChange={handleChange}
                       label='email' required/>
            <FormInput name='password' type='password' value={password} onChange={handleChange}
                       label='password' required/>

            <ButtonsBarContainer>
                <CustomButton type="submit">SIGN IN</CustomButton>
                <CustomButton type='button' isGoogleSignIn onClick={() => dispatch(googleSignInStart())}>SIGN UP WITH GOOGLE</CustomButton>
            </ButtonsBarContainer>
        </form>
    </SignInContainer>);
}

export default SignIn;