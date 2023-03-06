import {CheckboxFilters} from '../CheckboxFilters'
import * as S from './ImageListContainer.styles'
import ImgItem from "../ImgItem/ImgItem";
import {Pagination} from "../Pagination";
import {useEffect} from "react";
import {useSearchParams} from "react-router-dom";
import {v1 as uuid} from 'uuid'
let shortPrices = {
  'Lower than $20': '-20',
  '$20 - $100': '20-100',
  '$100 - $200': '100-200',
  'more than $200': '+200'
}
let reverseShortPrices = {}
for(let key in shortPrices){
  reverseShortPrices[shortPrices[key]] = key
}
export function ImageListContainer({ getImages, images}) {
  let [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    getImages({
      page: searchParams.get('page'),
      categories: searchParams.get('category'),
      prices: searchParams.get('price'),
      sort: searchParams.get('sort'),
      order: searchParams.get('order')
    })
  }, [searchParams])
  return (
    <S.ImageListContainer>
      <S.FiltersDesktop>
        <CheckboxFilters/>
      </S.FiltersDesktop>
      <S.ImageBox>
        {images.map((item) => {
          return <ImgItem item={item} key={uuid()}></ImgItem>
        })}
      </S.ImageBox>
      <div></div>
      <Pagination/>
    </S.ImageListContainer>
  );
}

