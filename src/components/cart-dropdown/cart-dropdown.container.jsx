import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import CartDropdown from "./cart-dropdown.component";
import {selectCartItems} from "../../redux/cart/cart.selectors";

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});

const CartDropdownContainer = compose(connect(mapStateToProps), withRouter)(CartDropdown);

export default CartDropdownContainer;