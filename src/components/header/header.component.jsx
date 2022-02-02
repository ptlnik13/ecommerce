import React from "react";
import {HeaderContainer, LogoContainer, OptionsContainer, OptionLink} from "./header.styles";
import {connect} from "react-redux";
import {ReactComponent as Logo} from "../../assets/crown.svg";
import CartIcon from "../cart-icon/cart-icon.component";
// import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import CartDropdownContainer from "../cart-dropdown/cart-dropdown.container";
import {auth} from "../../firebase/firebase.utils";
import {createStructuredSelector} from "reselect";
import {selectCurrentUser} from "../../redux/user/user.selector";
import {selectCartHidden} from "../../redux/cart/cart.selectors";
import {signOutStart} from "../../redux/user/user.action";

const Header = ({currentUser, hidden, signOutStart}) => (
    <HeaderContainer>
        <LogoContainer to='/'>
            <Logo className="logo"/>
        </LogoContainer>
        <OptionsContainer>
            <OptionLink to='/shop'>SHOP</OptionLink>
            <OptionLink to='/contact'>CONTACT</OptionLink>
            {
                currentUser ? <OptionLink as='div' onClick={signOutStart}>SIGN OUT</OptionLink> :
                    <OptionLink to='/signin'>SIGN IN</OptionLink>
            }
            <CartIcon/>
        </OptionsContainer>
        {
            hidden ? null : <CartDropdownContainer/>
        }
    </HeaderContainer>
)

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

const mapDispatchToProps = dispatch => ({
    signOutStart: () => dispatch(signOutStart())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);