import * as S from './ImageListHeader.styles'
import {ReactComponent as Top} from '../../../assets/icons/arrowTop.svg';
import {ReactComponent as Bottom} from '../../../assets/icons/arrowBottom.svg';
import {ReactComponent as FilterIcon} from '../../../assets/icons/filters-mobile.svg';
import {useSearchParams} from "react-router-dom";
import {CheckboxFilters} from "../CheckboxFilters";
import {useState} from "react";

function ImageListHeader() {
  let [searchParams, setSearchParams] = useSearchParams();
  let [filterPopupIsOpen,setFilterPopupIsOpen] = useState(false)
  const onSelectChange = (e) => {
    searchParams.set('sort', e.target.value)
    setSearchParams(searchParams)
  }
  const onAscDescClick = () => {
    searchParams.set('order', searchParams.get('order') === '-' ? '+' : '-')
    setSearchParams(searchParams)
  }

  return (
    <S.ImgListHeading>
      <S.Text>
        Photography /
        <span> Premium Photos</span>
      </S.Text>
      <S.MobileFilter>
        <FilterIcon onClick={() => setFilterPopupIsOpen(!filterPopupIsOpen)}/>
        {filterPopupIsOpen && <S.FiltersPopup>
          <CheckboxFilters closePopup={() => setFilterPopupIsOpen(false)}/>
        </S.FiltersPopup>}
      </S.MobileFilter>
      <S.SortOrderBlock>
        <S.AscDescButtons onClick={onAscDescClick}>
          <Top/>
          <Bottom/>
        </S.AscDescButtons>
        Sort By
        <select defaultValue={'price'} onChange={onSelectChange} id="">
          <option value="price">Price</option>
          <option value="name">alphabetical</option>
        </select>
      </S.SortOrderBlock>
    </S.ImgListHeading>
  );
}

export default ImageListHeader

