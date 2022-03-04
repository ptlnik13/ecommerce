import styled from "styled-components";
import {ReactComponent as ShoppingIconSVG} from '../../assets/shopping-bag.svg';

export const CartContainer = styled.div`
  align-items     : center;
  cursor          : pointer;
  display         : flex;
  height          : 45px;
  justify-content : center;
  position        : relative;
  width           : 45px;
`;

export const ShoppingIcon = styled(ShoppingIconSVG)`
  width: 24px;
  height: 24px;
`;

export const ItemCountContainer = styled.span`
    bottom      : 12px;
    font-size   : 10px;
    font-weight : bold;
    position    : absolute;
`