import CheckboxGroup from '../../../components/CheckboxGroup/CheckboxGroup';
import * as S from './CheckboxFilters.styles'
import {useEffect} from "react";
import {ReactComponent as Close} from '../../../assets/icons/close.svg';

import {useSearchParams} from "react-router-dom";
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
export function CheckboxFilters ({getFilters, categories, getImages,closePopup}) {
  let [searchParams, setSearchParams] = useSearchParams();
  const prices = ['Lower than $20', '$20 - $100', '$100 - $200', 'more than $200']
  useEffect(() => {
    getFilters();
  }, [])
  const handleCategoryChange = (categories) => {
    searchParams.set('category', categories)
    setSearchParams(searchParams)
  };
  const handlePriceChange = (prices) => {
    searchParams.set('price', prices.length ? shortPrices[prices[0]] : [])
    setSearchParams(searchParams)
  };
  return (
      <S.Filters>
        <S.Categories>
          <S.Heading>
            Category
            <Close onClick={closePopup}/>
          </S.Heading>
          <CheckboxGroup
            options={categories}
            multiple={true}
            defaultValues={searchParams.get('category')}
            onCheckboxChange={handleCategoryChange}
          />
        </S.Categories>
        <S.Prices>
          <S.Heading>Price range</S.Heading>
          <CheckboxGroup
            options={prices}
            defaultValues={searchParams.get('price')}
            onCheckboxChange={handlePriceChange}
          />
        </S.Prices>
      </S.Filters>
  );
}

