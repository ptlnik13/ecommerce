import React, {useEffect} from "react";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import CheckoutPage from "./pages/checkout/checkoutpage.component";
import Header from "./components/header/header.component";

import {Redirect, Route, Switch} from "react-router-dom";

import {useSelector, useDispatch} from "react-redux";

import {selectCurrentUser} from "./redux/user/user.selector";

import './App.css';
import {checkUserSession} from "./redux/user/user.action";

const App = () => {
    const currentUser = useSelector(selectCurrentUser);
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(checkUserSession());
    }, [dispatch])
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
export default App;
