import React from "react";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import CheckoutPage from "./pages/checkout/checkoutpage.component";

import Header from "./components/header/header.component";

import {Redirect, Route, Switch} from "react-router-dom";

import {connect} from "react-redux";

import {selectCurrentUser} from "./redux/user/user.selector";

import {createStructuredSelector} from "reselect";

import './App.css';

/*import {selectCollectionsForPreview} from "./redux/shop/shop.selector";*/

class App extends React.Component {
    unsubscribeFromAuth = null;
    unsubscribeFromSnapshot = null;

    componentDidMount() {
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
        this.unsubscribeFromSnapshot();
    }

    render() {
        const {currentUser} = this.props;
        return (
            <div>
                <Header/>
                <Switch>
                    <Route exact path='/' component={HomePage}/>
                    <Route path='/shop' component={ShopPage}/>
                    <Route exact path='/checkout' component={CheckoutPage}/>
                    <Route exact path='/signin' render={() => currentUser ? (<Redirect to='/'/>) : (<SignInAndSignUpPage/>)}/>
                </Switch>
            </div>
        );
    }
}

const mapStateToProps = createStructuredSelector({ // you are removing state here, compare with header.component.jsx file.
    currentUser: selectCurrentUser,
})

export default connect(mapStateToProps)(App);
