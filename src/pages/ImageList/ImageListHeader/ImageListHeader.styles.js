import styled from "styled-components";

export const ImgListHeading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 20px;

  div {
    font-size: 22px;
  }

  select {
    margin-left: 2px;
    border: none;
    font-size: 22px;
    outline: none;
  }
`
export const AscDescButtons = styled.div`
  display: inline-block;
  cursor: pointer;
  margin-right: 10px;
`

export const SortOrderBlock = styled.div`
  @media only screen and (max-width: 414px) {
    display: none;
  }
`


export const MobileFilter = styled.div`
  display: none;
  @media only screen and (max-width: 414px) {
    display: block;
  }
`
export const FiltersPopup = styled.div`
  @media only screen and (max-width: 414px) {
    position: fixed;
    z-index: 50;
    bottom: 0;
    left: 0;
    background-color: #fff;
    width: 100%;
  }
  input[type=checkbox]{
    transform: scale(2);
    outline: 1px solid  black;
  }
  label{
    span{
      padding-left: 10px;
    }
  }
`

export const Text = styled.h1`
  font-size: 30px;
  span{
    color: #9B9B9B;
  }
  @media only screen and (max-width: 414px) {
    font-size: 18px;
  }
`