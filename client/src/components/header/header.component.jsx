import React from "react";
import {HeaderContainer, LogoContainer, OptionsContainer, OptionLink} from "./header.styles";
import {useDispatch, useSelector} from "react-redux";
import {ReactComponent as Logo} from "../../assets/crown.svg";
import CartIcon from "../cart-icon/cart-icon.component";
import {selectCurrentUser} from "../../redux/user/user.selector";
import {selectCartHidden} from "../../redux/cart/cart.selectors";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import {signOutStart} from "../../redux/user/user.action";

const Header = () => {
    const currentUser = useSelector(selectCurrentUser);
    const hidden = useSelector(selectCartHidden);
    const dispatch = useDispatch();
    return (
        <HeaderContainer>
            <LogoContainer to='/'>
                <Logo className="logo"/>
            </LogoContainer>
            <OptionsContainer>
                <OptionLink to='/shop'>SHOP</OptionLink>
                <OptionLink to='/contact'>CONTACT</OptionLink>
                {
                    currentUser ? <OptionLink as='div' onClick={() => dispatch(signOutStart())}>SIGN OUT</OptionLink> :
                        <OptionLink to='/signin'>SIGN IN</OptionLink>
                }
                <CartIcon/>
            </OptionsContainer>
            {
                hidden ? null : <CartDropdown/>
            }
        </HeaderContainer>
    )
}

export default Header;