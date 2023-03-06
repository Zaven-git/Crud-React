import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding-bottom: 40px;
  @media only screen and (max-width: 414px) {
    width: 100%;
  }
`

export const ImgWrapper = styled.div`
  width: 280px;
  height: 390px;
  background-image: url("${({src}) => src}");
  background-position: center center;
  background-size: cover;
  display: flex;
  align-items: flex-end;
  @media only screen and (max-width: 414px) {
    width: 100%;
  }
  button{
    cursor:pointer;
    display: none;
    @media only screen and (max-width: 414px) {
      display: block;
    }
  }
  &:hover > button{
    display: block;
  }
`
export const BestSeller = styled.span`
  position: absolute;
  top: 0;
  font-size: 20px;
  left: 0;
  padding: 2px 10px 2px 15px;
  background-color: #fff;
`
export const Button = styled.button`
  border: none;
  background-color: #000;
  color: #fff;
  text-transform: uppercase;
  font-size: 23px;
  padding: 10px 0;
  width: 100%;
`
export const Category = styled.span`
  color: #656565;
  text-transform: capitalize;
  padding-top: 8px;
  font-size: 22px;
  font-weight: 700;
`
export const Name = styled.h1`
  margin: 0;
  padding-top: 8px;
  text-transform: capitalize;
  font-size: 34px;
`
export const Price = styled.p`
  margin:0;
  padding-top: 8px;
  font-width: 400;
  color: #656565;
  font-size: 29px;
`





