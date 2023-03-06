import * as S from './ImageList.styles'
import ImageListHeader from "./ImageListHeader/ImageListHeader";
import {ImageListContainer} from "./ImageListContainer";

function ImageList() {
  return (
    <S.Wrapper>
      <ImageListHeader />
      <ImageListContainer></ImageListContainer>
    </S.Wrapper>
  );
}

export default ImageList