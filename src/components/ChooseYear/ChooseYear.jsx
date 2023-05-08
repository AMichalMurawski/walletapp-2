import * as React from 'react';
import { useState } from 'react';
import css from './ChooseYear.module.scss';

export const ChooseYear = ({ selected, setSelected }) => {
  const [isActive, setIsActive] = useState(false);
  const options = ['2017', '2018', '2019', '2020', '2021', '2022', '2023'];

  return (
    <div className={css.dropdown}>
      <div className={css.dropdownBtn} onClick={e => setIsActive(!isActive)}>
        {selected}
        <div className={css.caret}></div>
      </div>

      {isActive && (
        <div className={css.dropdownContent}>
          {options.map(option => (
            <div
              onClick={e => {
                setSelected(option);
                setIsActive(false);
              }}
              className={css.dropdownItem}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
