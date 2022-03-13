import React from "react";
import {ErrorImageOverlay, ErrorImageContainer, ErrorImageText} from "./error-boundry.styles";
import error from '../../assets/error.png'

class ErrorBoundry extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasErrored: false
        }
    }

    static getDerivedStateFromError(error) {
        //process the error
        return {
            hasErrored: true
        }
    }

    componentDidCatch(error, errorInfo) {
        console.log(error);
    }
    
    render() {
        if (this.state.hasErrored) {
            return (
                <ErrorImageOverlay>
                    <ErrorImageContainer imageUrl={error}/>
                    <ErrorImageText>Sorry, This page is Broken 😒</ErrorImageText>
                    <ErrorImageText>Please check Internet Connectivity</ErrorImageText>
                </ErrorImageOverlay>
            )
        }
        return this.props.children;
    }

}

export default ErrorBoundry;