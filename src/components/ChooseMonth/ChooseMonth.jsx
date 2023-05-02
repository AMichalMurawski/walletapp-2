import * as React from 'react';
import { useState } from 'react';
import css from './ChooseMonth.module.scss';

function ChooseMonth ({selected, setSelected}) {

    const [isActive, setIsActive] = useState(false);
    const options = ['January', "February", 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']


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
        </div>
    )
};

export default ChooseMonth;