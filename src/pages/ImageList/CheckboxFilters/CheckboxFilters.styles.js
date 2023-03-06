import styled from "styled-components";

export const Filters = styled.div`
  padding: 25px;
`
export const Categories = styled.div`
  padding-bottom: 10px;
  margin-right: 70px;
  border-bottom: 4px solid #C2C2C2;
  @media only screen and (max-width: 414px) {
    margin-right: 0px;
  }
`

export const Prices = styled.div`
  padding-top: 10px;
`

export const Heading = styled.h1`
  font-size: 22px;
  svg{
    display: none;
  }
  @media only screen and (max-width: 414px) {
    display: flex;
    justify-content: space-between;
    svg{
      display: inline-block;
    }
  }
`