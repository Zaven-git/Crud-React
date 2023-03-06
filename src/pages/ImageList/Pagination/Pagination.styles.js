import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  padding: 40px 0;
  align-items: center;
  justify-content: center;
  font-size: 27px;
  span{
    padding: 0 5px;
  }
`

export const Page = styled.span`
  cursor: pointer;
  margin: 5px;
  color: ${({selected}) => !selected ? '#B4B4B4' : '#000'};
`





