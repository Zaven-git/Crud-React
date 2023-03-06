import * as S from './Pagination.styles'
import {ReactComponent as LeftArrow} from '../../../assets/icons/leftArrow.svg';
import {ReactComponent as RightArrow} from '../../../assets/icons/RightArrow.svg';
import {useSearchParams} from "react-router-dom";
import {v1 as uuid} from 'uuid';
import {useEffect} from "react";

export function Pagination({pageCount}) {
  let [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    setSearchParams({
        page: searchParams.get("page") || '1',
        category: searchParams.get('category') || '',
        price: searchParams.get('price') || '',
        sort: searchParams.get('sort') || '',
        order: searchParams.get('order') || '-',
      }
    )
  }, [])

  function onPageClick(p) {
    setSearchParams(
      {
        page: `${p}`,
        category: searchParams.get('category') || '',
        price: searchParams.get('price') || '',
        sort: searchParams.get('sort') || '',
        order: searchParams.get('order') || '',
      }
    );
  };
  return (
    <S.Wrapper>
      <LeftArrow/>
      {Array.from({length: pageCount}, (_, i) => i + 1).map(p => {
        return (
          <S.Page key={uuid()} selected={+searchParams.get('page') === p} onClick={() => onPageClick(p)}>{p}</S.Page>)
      })}
      <RightArrow/>
    </S.Wrapper>
  );
}
