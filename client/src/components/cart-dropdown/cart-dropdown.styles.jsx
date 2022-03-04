import styled from "styled-components";
import CustomButton from "../custom-button/custom-button.component";

export const CartDropdownContainer = styled.div`
  background-color : white;
  border           : 1px solid black;
  display          : flex;
  flex-direction   : column;
  height           : 340px;
  padding          : 20px;
  position         : absolute;
  right            : 10px;
  top              : 80px;
  width            : 240px;
  z-index          : 5;
  
  ::-webkit-scrollbar {
    background-color : transparent;
    width            : 4px;
  }

  ::-webkit-scrollbar-thumb {
    background-color : rgba(0, 0, 0, 0.7);
    border-radius    : 20px;
  }
`
export const CartDropdownButton = styled(CustomButton)`
  margin-top: auto;
`;

export const CartItemsContainer = styled.div`
    display        : flex;
    flex-direction : column;
    height         : 240px;
    overflow       : scroll;
`

export const EmptyMessageContainer = styled.span`
    font-size : 16px;
    left      : 50%;
    position  : absolute;
    top       : 40%;
    transform : translate(-50%, -50%);
`

