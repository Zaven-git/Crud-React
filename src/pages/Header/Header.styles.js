import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;align-items: center;
  padding: 10px 40px 20px 40px;
  border-bottom: 4px solid #E4E4E4;
  @media only screen and (max-width: 414px) {
    padding: 10px 20px 20px;
  }
  svg{
    margin-right: 6.5px;
    cursor: pointer;
  }
`

export const BadgeWrapper = styled.div`
  position: relative;
`

export const BadgeItemCounter = styled.div`
  position: absolute;
  right: 0;
  bottom: -10px;
  margin-top: 10px;
  padding: 0.5px 3px;
  background-color: black;
  color: #fff;
`

