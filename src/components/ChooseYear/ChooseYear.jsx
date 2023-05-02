import * as React from 'react';
import { useState } from 'react';
import css from './ChooseYear.module.scss';

function ChooseYear ({selected, setSelected}) {

    const [isActive, setIsActive] = useState(false);
    const options = ['2017', "2018", '2019', '2020', '2021', '2022', '2023']


    return (
        <div className={css.dropdown}>
            <div>
                    <div className={css.dropdownBtn} onClick={ e => setIsActive(!isActive)}> 
                    {selected}
                    <div className={css.caret}></div>
                </div>
            </div>
            
            {isActive && (
                <div className={css.dropdownContent} >
                    {options.map ((option) => (
                        <div 
                        onClick={(e) => {
                        setSelected(option)
                        setIsActive(false)
                        }}
                        className={css.dropdownItem}>
                        {option}
                        </div>
                     ))}           
                 </div>
            )}
            <div className={css.category}>
                <h2>Category</h2>
                <h2>Sum</h2>
            </div>

            <div className={css.footer}>
                <div className={css.footer__expenses}>
                    <h3>Expenses:</h3>
                    <h4 className={css.footer__expensesColorTop}>100 00 00</h4>
                </div>

                <div className={css.footer__expenses}>
                <h3>Income:</h3>
                    <h4 className={css.footer__expensesColorBottom}>100 00 00</h4>
            </div>
            </div>
        </div>
    )
};

export default ChooseYear;