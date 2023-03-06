import * as S from './Checkbox.styles'

function Checkbox({label, isSelected, onCheckboxChange}) {
  return (
    <S.CheckboxWrapper>
      <label>
        <input
          type="checkbox"
          name={label}
          checked={isSelected}
          onChange={onCheckboxChange}
        />
        <span>{label}</span>
      </label>
    </S.CheckboxWrapper>
  );
}

export default Checkbox