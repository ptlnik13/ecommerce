import styled from "styled-components";

export const CheckoutItemContainer = styled.div`
   align-items   : center;
  border-bottom : 1px solid darkgrey;
  display       : flex;
  font-size     : 20px;
  min-height    : 100px;
  padding       : 15px 0;
  width         : 100%;
    `

export const ImageContainer = styled.div`
    padding-right : 15px;
    width         : 23%;
    
    img {
      height : 100%;
      width  : 100%;
    }
    `
export const TextContainer = styled.span`
  width: 23%;
`;

export const QuantityContainer = styled(TextContainer)`
  display: flex;
  span {
    margin: 0 10px;
  }
  div {
    cursor: pointer;
  }
`;

export const RemoveButtonContainer = styled.div`
  padding-left: 12px;
  cursor: pointer;
`;