import styled from "styled-components";

export const ImageListContainer = styled.main`
  display: grid;
  grid-template-columns: 26% 1fr;
  @media only screen and (max-width: 414px) {
    grid-template-columns: 1fr;
  }
`
export const FiltersDesktop = styled.main`
  @media only screen and (max-width: 414px) {
    display: none;
  }
`

export const ImageBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`


