import styled from "styled-components";

export const Wrapper = styled.main`
  padding-top: 20px;
  @media only screen and (max-width: 414px) {
    padding-left: 14px;
  }
`
export const DescriptionContainer = styled.main`
  display: grid;
  grid-template-columns: 57% 1fr;
  padding-bottom: 30px;
  border-bottom: 4px solid #E4E4E4;
  @media only screen and (max-width: 414px) {
    grid-template-columns: 1fr;
    width: 96%;
  }
`
export const LeftSide = styled.div`
  p{
    color: #656565;
    font-size: 18px;
    line-height: 27px;
  }
  
`
export const RightSide = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  img{
    object-fit: cover;
    object-position: center;
    width: 117px;
    height: 147px;
    padding-right: 30px;
    :last-of-type{
      padding-right: 0!important;
    }
    @media only screen and (max-width: 414px) {
      width: 107px;
    }
  }
  .details{
    h1,p{
      text-align: right;
    }
  }
`
export const RecomendedImgs = styled.div`
  display: flex;
`


export const Text = styled.h1`
  padding-bottom: 10px;
  font-size: 22px;
`