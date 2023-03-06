import React from 'react';
import * as S from './DropdownItem.styles'

const DropdownItem = function ({item}) {
  return (
    <>
      <S.ImgInfo>
        <div>
          <S.ImgName>{item.name}</S.ImgName>
          <S.imgPrice>${item.price}</S.imgPrice>
        </div>
        <img src={require(`../../../../assets/images/${item.imgSrc}.webp`)} alt={item.name}/>
      </S.ImgInfo>
    </>
  );
}

export default DropdownItem

