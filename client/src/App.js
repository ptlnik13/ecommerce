import React, {useEffect, lazy, Suspense} from "react";

import Header from "./components/header/header.component";
import {Redirect, Route, Switch} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import {selectCurrentUser} from "./redux/user/user.selector";
import './App.css';
import {checkUserSession} from "./redux/user/user.action";
import Spinner from "./components/spinner/spinner.component";
import ErrorBoundry from "./components/error-boundry/error-boundry.component";


const HomePage = lazy(() => import('./pages/homepage/homepage.component'));
const ShopPage = lazy(() => import("./pages/shop/shop.component"));
const CheckoutPage = lazy(() => import("./pages/checkout/checkoutpage.component"));
const SignInAndSignUpPage = lazy(() => import("./pages/sign-in-and-sign-up/sign-in-and-sign-up.component"));


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
                <ErrorBoundry>
                    <Suspense fallback={<Spinner/>}>
                        <Route exact path='/' component={HomePage}/>
                        <Route path='/shop' component={ShopPage}/>
                        <Route exact path='/checkout' component={CheckoutPage}/>
                        <Route exact path='/signin' render={() => currentUser ? (<Redirect to='/'/>) : (<SignInAndSignUpPage/>)}/>
                    </Suspense>
                </ErrorBoundry>
            </Switch>
        </div>
    );
}
export default App;
