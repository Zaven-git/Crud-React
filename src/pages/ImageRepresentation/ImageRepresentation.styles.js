import styled from "styled-components";

export const Wrapper = styled.main`
  padding-top: 30px;
  @media only screen and (max-width: 414px) {
    padding: 14px;
  }
`
export const Heading = styled.main`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
`

export const Name = styled.h1`
  font-size: 32px;
`

export const RepresentedImgBlock = styled.div`
  width: 100%;
  position: relative;
  height: 70vh;
  @media only screen and (max-width: 414px) {
    height: 30vh;
  }
  span{
    background: #fff;
    padding: 20px 50px;
    font-weight: 700;
    font-size: 20px;
    position: absolute;
    bottom: 0;
    left: 0;
    @media only screen and (max-width: 414px) {
      font-size: 15px;
    }
  }
`
export const Img = styled.img`
    object-fit: cover;
    width: 100%;
    height: 100%;
`

export const Button = styled.button`
  border: none;
  background: #000;
  font-size: 23px;
  color: #fff;
  padding: 9px 40px;
  text-transform: uppercase;
  cursor: pointer;
  @media only screen and (max-width: 414px) {
    display: none;
  }
`
export const MobileButton = styled.button`
  border: none;
  display: none;
  background: #000;
  width: 100%;
  font-size: 23px;
  color: #fff;
  margin-top: 20px;
  padding: 14px 40px;
  text-transform: uppercase;
  cursor: pointer;
  @media only screen and (max-width: 414px) {
    display: block;
  }
`


