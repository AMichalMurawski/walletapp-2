import * as React from 'react';
import css from './LegendChart.module.scss';

const LegendChart = () => {

    return (
        <div className={css.categoryBox}>
            <div className={css.category}>
                <h2>Category</h2>
                <h2>Sum</h2>
            </div>
        <div className={css.buttonContainer}>
            <div className={css.button}>
            <button></button>
                <span>Main expenses</span>
                <span className={css.sum}>100</span>
            </div>
            <div className={css.button}>
            <button></button>
                <span>Products</span>
                <span className={css.sum}>100</span>
            </div>
            <div className={css.button}>
            <button></button>
                <span>Car</span>
                <span className={css.sum}>100</span>
            </div>
            <div className={css.button}>
            <button></button>
                <span>Self care</span>
                <span className={css.sum}>100</span>
            </div>
            <div className={css.button}>
            <button></button>
                <span>Child care</span>
                <span className={css.sum}>100</span>
            </div>
            <div className={css.button}>
            <button></button>
                <span>Household products</span>
                <span className={css.sum}>100</span>
            </div>
            <div className={css.button}>
            <button></button>
                <span>Education</span>
                <span className={css.sum}>100</span>
            </div>
            <div className={css.button}>
            <button></button>
                <span>Leisure</span>
                <span className={css.sum}>100</span>
            </div>
            <div className={css.button}>
            <button></button>
                <span>Other exprenses</span>
                <span className={css.sum}>100</span>
            </div>
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

export default LegendChart;