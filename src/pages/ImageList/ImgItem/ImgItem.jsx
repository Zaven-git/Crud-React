import * as S from './ImgItem.styles'
import {IMAGE_TYPES} from "../../../store/types/images";
import {useDispatch} from "react-redux";

function ImageItem({item}) {
  const dispatch = useDispatch();
  const onAddToCardClick = (name, price, imgSrc, id) => {
    dispatch({
      type: IMAGE_TYPES.SET_ITEM_TO_BADGE,
      payload: {newBadge: {name, price, imgSrc, id}}
    })
    window.scrollTo({top: 0, behavior: 'smooth'})
  }
  return item.name && (
    <S.Wrapper>
      {item.bestseller ? <S.BestSeller>Best Seller</S.BestSeller> : <></>}
      <S.ImgWrapper src={require(`../../../assets/images/${item.image.src}.webp`)}>
        <S.Button onClick={() => onAddToCardClick(item.name, item.price, item.image.src, item.id)}>Add To
          Card</S.Button>
      </S.ImgWrapper>
      <S.Category>{item.category}</S.Category>
      <S.Name>{item.name}</S.Name>
      <S.Price>{item.price}{item.currency}</S.Price>
    </S.Wrapper>
  )
}

export default ImageItem