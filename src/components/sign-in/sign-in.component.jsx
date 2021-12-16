import React from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import {auth, signInWithGoogle} from "../../firebase/firebase.utils";
import './sign-in.styles.scss';
import {ButtonsBarContainer, SignInContainer, SignInTitle} from "./sign-in.styles";

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async e => {
        e.preventDefault();
        try {
            await auth.signInWithEmailAndPassword(this.state.email, this.state.password);
            this.setState({email: '', password: ''});
        } catch (e) {
            console.log(e.message);
        }
    }
    handleChange = e => {
        const {value, name} = e.target;

        this.setState({[name]: value})
    }

    render() {
        return (
            <SignInContainer>
                <SignInTitle>I already have an account</SignInTitle>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput type='email' name='email' value={this.state.email} onChange={this.handleChange}
                               label='email' required/>
                    <FormInput name='password' type='password' value={this.state.password} onChange={this.handleChange}
                               label='password' required/>

                    <ButtonsBarContainer>
                        <CustomButton type="submit">SIGN IN</CustomButton>
                        <CustomButton type='button' isGoogleSignIn onClick={signInWithGoogle}>SIGN UP WITH GOOGLE</CustomButton>
                    </ButtonsBarContainer>
                </form>
            </SignInContainer>
        );
    }

}

export default SignIn;