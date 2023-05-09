import React from 'react';
import Select from 'react-select';
import { format } from 'date-fns';
import { pl } from 'date-fns/locale';
import css from './Dropdown.module.scss';
import { selectStyles } from './SelectStyles';

// const currentMonth = new Date().getMonth() + 1;
const months = Array.from({ length: 12 }, (item, i) => {
  return format(new Date(0, i), 'LLLL', {
    locale: pl,
  });
});

const monthOptions = Array(12)
  .fill(null)
  .map((item, index) => ({ value: index + 1, label: months[index] }));

const currentYear = new Date().getFullYear();
const years = [];
for (let i = currentYear; i >= 1999; i--) {
  years.push({ value: i, label: i.toString() });
}

const TableFilters = () => {
  const updateDate = (name, value) => {
    // setDate(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className={css.selectContainer}>
      <div className={css.select}>
        <Select
          styles={selectStyles}
          options={monthOptions}
          placeholder="Month"
          onChange={option => {
            updateDate('month', option.value);
          }}
        />
      </div>
      <div className={css.select}>
        <Select
          styles={selectStyles}
          options={years}
          placeholder="Year"
          onChange={option => {
            updateDate('year', option.value);
          }}
        />
      </div>
    </div>
  );
};
export default TableFilters;
