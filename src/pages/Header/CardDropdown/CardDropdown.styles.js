import styled from "styled-components";

export const DropDownWrapper = styled.div`
  background-color: #fff;
  position: absolute;
  top: 90px;
  right: 0px;
  border: 4px solid #E4E4E4;
  width: 440px;
  z-index: 10;
  padding: 10px;
  height: 80vh;
  overflow: auto;
  @media only screen and (max-width: 414px) {
    width:300px;
  }
`

export const IconWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`
export const ClearInfoButton = styled.button`
  border: 3px solid #000000;
  text-align: center;
  width:100%;
  cursor: pointer;
  text-transform: uppercase;
  padding: 10px;
  background-color: #fff;
`



