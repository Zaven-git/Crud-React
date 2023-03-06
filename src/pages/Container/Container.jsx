import {ImageRepresentation} from "../ImageRepresentation";
import ImageList from "../ImageList/ImageList";
import {Description} from "../Description/";
import Header from "../Header/Header";
import * as S from './Container.styles'
import {useEffect} from "react";

export function Container({getFeatured}) {
  useEffect(() => {
    getFeatured()
  }, [])
  return (
    <S.Container>
      <Header/>
      <ImageRepresentation/>
      <Description/>
      <ImageList/>
    </S.Container>
  );
}
