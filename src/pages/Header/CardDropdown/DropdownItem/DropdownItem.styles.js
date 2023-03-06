import styled from "styled-components";

export const ImgInfo = styled.div`
  display: flex;
  padding: 20px 0;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #C2C2C2;
  img{
    width: 149px;
    object-fit: cover;
    height: 86px;
  }
`
export const ImgName = styled.p`
  margin:0;
  font-size: 20px;
  font-weight: 700;
`
export const imgPrice = styled.p`
  margin:0;
  color: #656565;
  font-size: 29px;
  font-width: 400;
`