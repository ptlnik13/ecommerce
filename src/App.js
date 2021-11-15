import React from "react";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import {Route, Switch} from "react-router-dom";
import {auth, createUserProfileDocument} from "./firebase/firebase.utils";

import './App.css';

class App extends React.Component {
    unsubscribeFromAuth = null;
    unsubscribeFromSnapshot = null;

    constructor(props) {
        super(props);

        this.state = {
            currentUser: null
        }

    }

    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth);

                this.unsubscribeFromSnapshot = userRef.onSnapshot(snapShot => {
                    this.setState({
                        currentUser: {
                            id: snapShot.id,
                            ...snapShot.data()
                        }
                    })
                })
            } else {
                this.setState({currentUser: userAuth});
            }
        })
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
        this.unsubscribeFromSnapshot();
    }

    render() {
        return (
            <div>
                <Header userExist={this.state.currentUser}/>
                <Switch>
                    <Route exact path='/' component={HomePage}/>
                    <Route exact path='/shop' component={ShopPage}/>
                    <Route exact path='/signin' component={SignInAndSignUpPage}/>
                </Switch>
            </div>
        );
    }
}

export default App;
