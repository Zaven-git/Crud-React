import React from 'react';
import * as S from './Description.styles'

export const Description = function ({featured}) {
  return featured.details && (
    <S.Wrapper>
      <S.DescriptionContainer>
        <S.LeftSide>
          <S.Text>
            About {featured.name}
          </S.Text>
          <span>Pets</span>
          <p>
            {featured.details.description}
          </p>
        </S.LeftSide>
        <S.RightSide>
          <S.Text>People also by </S.Text>
          <S.RecomendedImgs>
            {featured.details.recommendations.map((e)=>{
              return <img src={require(`../../assets/images/${e.src}.webp`)} alt={e.alt} key={e.src}/>
            })}
          </S.RecomendedImgs>
          <div className='details'>
            <S.Text>Details</S.Text>
            <p>Size : {featured.details.dimmentions.width } / {featured.details.dimmentions.height } pixel</p>
            <p>Size : {(featured.details.size / 1024).toFixed(2) } mb</p>
          </div>
        </S.RightSide>
      </S.DescriptionContainer>
    </S.Wrapper>
  )
}
