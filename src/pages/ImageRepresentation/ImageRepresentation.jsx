import * as S from './ImageRepresentation.styles'
import {useDispatch} from "react-redux";
import {IMAGE_TYPES} from "../../store/types/images";

export function ImageRepresentation({featured}) {
  const dispatch = useDispatch()

  function onAddToCardClick() {
    dispatch({
      type: IMAGE_TYPES.SET_ITEM_TO_BADGE,
      payload: {
        newBadge: {
          name: featured.name,
          price: featured.price,
          imgSrc: featured.image.src,
          id: featured.id
        }
      }
    })
    window.scrollTo({top: 0, behavior: 'smooth'})
  }

  return featured.image ? (
    <S.Wrapper>
      <S.Heading>
        <S.Name>
          {featured.name}
        </S.Name>
        <S.Button onClick={onAddToCardClick}>
          Add to Card
        </S.Button>
      </S.Heading>
      <S.RepresentedImgBlock>
        <S.Img src={require(`../../assets/images/${featured.image.src}.webp`)} alt={featured.name}/>
        <span>Photo of the day</span>
      </S.RepresentedImgBlock>
      <S.MobileButton onClick={onAddToCardClick}>
        Add to Card
      </S.MobileButton>
    </S.Wrapper>
  ) : <>Loading</>
}
