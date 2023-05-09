import * as React from 'react';
import css from './Table.module.scss';
import TableFilters from '../../Dropdown/Dropdown';

const Table = () => {

const transaction = {
    categories: [
        {
          value: 'Main expenses',
          color: '#FED057',
        },
        {
          value: 'Products',
          color: '#FFD8D0',
        },
        {
          value: 'Car',
          color: '#FD9498',
        },
        {
          value: 'Self care',
          color: '#C5BAFF',
        },
        {
          value: 'Child care',
          color: '#6E78E8', 
        },
        {
          value: 'Household products',
          color: '#4A56E2',
        },
        {
          value: 'Education',
          color: '#81E1FF',
        },
        {
          value: 'Leisure',
          color: '#24CCA7',
        },
         {
          value: 'Other exprenses',
          color: '#00AD84',
        },
      ],
};

    return (
    <>
        <div className={css.container}>
        <TableFilters />
        <ul className={css.listNames}>
          <li className={css.nameElement}>Category</li>
          <li className={css.nameElement}>Sum</li>
        </ul>

            <ul className={css.listTransaction}>
        {transaction.categories?.length > 0 ? (
          transaction.categories.map(({ value, sum, color }) => {
            return (
              <li className={css.elementTransaction}>
                <div
                  style={{
                    backgroundColor: `${color}`,
                    width: '24px',
                    minHeight: '24px',
                    marginRight: '15px',
                  }}
                ></div>
                <div className={css.category}>{value}</div>
                <div className={css.sum}>{sum}</div>
              </li>
            );
          })
        ) : (
          <li className={css.elementTransaction}>
            <div className={css.category}>Here is nothing </div>
          </li>
        )}
      </ul>

      <ul className={css.listAll}>
        <li className={css.elementListAll}>
          <div className={css.elementAllText}>Costs:</div>
          <div className={css.elementAllCosts}>
            100
          </div>
        </li>
        <li className={css.elementListAll}>
          <div className={css.elementAllText}>Income:</div>
          <div className={css.elementAllIncome}>
           100
          </div>
        </li>
      </ul>
            </div>
            </>
    )
};

export default Table;

