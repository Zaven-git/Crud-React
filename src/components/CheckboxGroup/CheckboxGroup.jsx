import Checkbox from "../Checkbox/Checkbox";
import {useEffect, useState} from "react";

function CheckboxGroup({options, onCheckboxChange, defaultValues, multiple}) {
  const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);
  useEffect(() => {
      defaultValues && setSelectedCheckboxes(defaultValues.split(','));
  }, []);

  useEffect(() => {
    onCheckboxChange(selectedCheckboxes)
  }, [selectedCheckboxes])

  const toggleCheckbox = (label) => {
    if (multiple) {
      if (selectedCheckboxes.includes(label)) {
        setSelectedCheckboxes(selectedCheckboxes.filter((item) => item !== label));
      } else {
        setSelectedCheckboxes([...selectedCheckboxes, label]);
      }
    } else {
      setSelectedCheckboxes([label]);
    }
  };

  const renderCheckboxes = () => {
    return options.map((option) => {
      return (
        <Checkbox
          label={option}
          isSelected={selectedCheckboxes.includes(option)}
          onCheckboxChange={() => toggleCheckbox(option)}
          key={option}
        />
      );
    });
  };

  return (
    <div className="checkbox-group">
      {renderCheckboxes()}
    </div>
  );
}

export default CheckboxGroup;
