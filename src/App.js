import React from "react";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import CheckoutPage from "./pages/checkout/checkoutpage.component";

import Header from "./components/header/header.component";

import {Redirect, Route, Switch} from "react-router-dom";

import {auth, createUserProfileDocument} from "./firebase/firebase.utils";

import {connect} from "react-redux";

import {setCurrentUser} from "./redux/user/user.action";
import {selectCurrentUser} from "./redux/user/user.selector";

import {createStructuredSelector} from "reselect";

import './App.css';

class App extends React.Component {
    unsubscribeFromAuth = null;
    unsubscribeFromSnapshot = null;

    componentDidMount() {
        const {setCurrentUser} = this.props;
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
                if (userAuth) {
                    const userRef = await createUserProfileDocument(userAuth);

                    this.unsubscribeFromSnapshot = userRef.onSnapshot(snapShot => {
                            setCurrentUser({
                                id: snapShot.id,
                                ...snapShot.data()
                            })
                        }
                    )
                } else {
                    setCurrentUser(userAuth);
                }
            }
        )
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
        this.unsubscribeFromSnapshot();
    }

    render() {
        return (
            <div>
                <Header/>
                <Switch>
                    <Route exact path='/' component={HomePage}/>
                    <Route path='/shop' component={ShopPage}/>
                    <Route exact path='/checkout' component={CheckoutPage}/>
                    <Route exact path='/signin' render={() => this.props.currentUser ? (<Redirect to='/'/>) : (<SignInAndSignUpPage/>)}/>
                </Switch>
            </div>
        );
    }
}

const mapStateToProps = createStructuredSelector({ // you are removing state here, compare with header.component.jsx file.
    currentUser: selectCurrentUser
})
const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
