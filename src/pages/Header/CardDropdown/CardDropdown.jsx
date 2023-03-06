import React from 'react';
import * as S from './CardDropdown.styles'
import {ReactComponent as Close} from '../../../assets/icons/close.svg';
import DropdownItem from "./DropdownItem/DropdownItem";
import {useDispatch, useSelector} from "react-redux";
import {v1 as uuid} from 'uuid'
import {IMAGE_TYPES} from "../../../store/types/images";

const CardDropdown = function () {
  const dispatch = useDispatch();
  const closeBadgeMenu = () => {
    dispatch({
      type: IMAGE_TYPES.TOGGLE_BADGE_MENU,
      payload: false
    })
  }
  const clearBadge = () => {
    dispatch({
      type: IMAGE_TYPES.CLEAR_BADGE
    })
  }
  const itemsInBadge = useSelector(state => state.images.itemsInBadge)
  const badgeIsOpen = useSelector(state => state.images.badgeIsOpen)
  return (
    badgeIsOpen && <S.DropDownWrapper>
      <S.IconWrapper>
        <Close onClick={closeBadgeMenu}/>
      </S.IconWrapper>
      {itemsInBadge.map((item) => {
        return <DropdownItem item={item} key={uuid()}/>
      })}
      <S.ClearInfoButton onClick={clearBadge}>Clear</S.ClearInfoButton>
    </S.DropDownWrapper>
  );
}

export default CardDropdown

