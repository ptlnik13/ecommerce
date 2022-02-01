import React from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import './sign-in.styles.scss';
import {ButtonsBarContainer, SignInContainer, SignInTitle} from "./sign-in.styles";
import {googleSignInStart, emailSignInStart} from "../../redux/user/user.action";
import {connect} from "react-redux";

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
        const {emailSignInStart} = this.props;
        const {email, password} = this.state;
        emailSignInStart(email, password);
    }
    handleChange = e => {
        const {value, name} = e.target;

        this.setState({[name]: value})
    }

    render() {
        const {googleSignInStart} = this.props;
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
                        <CustomButton type='button' isGoogleSignIn onClick={googleSignInStart}>SIGN UP WITH GOOGLE</CustomButton>
                    </ButtonsBarContainer>
                </form>
            </SignInContainer>
        );
    }

}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({email, password}))
})

export default connect(null, mapDispatchToProps)(SignIn);