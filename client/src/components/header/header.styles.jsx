import styled from 'styled-components';
import {Link} from "react-router-dom";

export const HeaderContainer = styled.div`
  background-color : white;
  display          : flex;
  height           : 80px;
  justify-content  : space-between;
  left             : 0;
  margin-bottom    : 25px;
  padding-bottom   : 25px;
  position         : sticky;
  top              : 0;
  width            : 100%;
  z-index          : 100;
`

export const LogoContainer = styled(Link)`
    height  : 100%;
    padding : 25px;
    width   : 70px;
`

export const OptionsContainer = styled.div`
    align-items     : center;
    display         : flex;
    height          : 100%;
    justify-content : flex-end;
    width           : 50%;    
`

export const OptionLink = styled(Link)`
      cursor  : pointer;
      padding : 10px 15px;
`