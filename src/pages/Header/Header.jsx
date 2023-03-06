import React from 'react';
import * as Styled from './Header.styles'
import {ReactComponent as B} from '../../assets/icons/B.svg';
import {ReactComponent as E} from '../../assets/icons/E.svg';
import {ReactComponent as J} from '../../assets/icons/J.svg';
import {ReactComponent as A} from '../../assets/icons/A.svg';
import {ReactComponent as M} from '../../assets/icons/M.svg';
import {ReactComponent as S} from '../../assets/icons/S.svg';
import {ReactComponent as _} from '../../assets/icons/Lodash.svg';
import {ReactComponent as Badge} from '../../assets/icons/shopping-cart.svg';
import CardDropdown from "./CardDropdown/CardDropdown";
import {useDispatch, useSelector} from "react-redux";
import {IMAGE_TYPES} from "../../store/types/images";

const Header = function () {
  const dispatch = useDispatch()
  let items = useSelector(state => state.images.itemsInBadge)
  const onBadgeClick = () => {
    if (items.length) {
      dispatch({
        type: IMAGE_TYPES.TOGGLE_BADGE_MENU,
        payload: true
      })
    }
  }
  return (
    <Styled.Wrapper>
      <div>
        <B/>
        <E/>
        <J/>
        <A/>
        <M/>
        <A/>
        <S/>
        <_/>
      </div>
      <Styled.BadgeWrapper>
        <Badge onClick={onBadgeClick}/>
        <Styled.BadgeItemCounter>{items.length || 0}</Styled.BadgeItemCounter>
        <CardDropdown/>
      </Styled.BadgeWrapper>
    </Styled.Wrapper>
  );
}

export default Header