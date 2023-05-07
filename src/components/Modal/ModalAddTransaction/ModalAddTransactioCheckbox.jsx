import { HiOutlinePlus, HiOutlineMinus } from 'react-icons/hi';
import s from './ModalAddTransactionCheckbox.module.scss';

export const ModalAddTransactionCheckbox = prop => {
  const { onHandleCheckbox, checkboxStatus } = prop;
  return (
    <div className={s.checkboxInfo}>
      <span
        className={s.checkboxText}
        style={checkboxStatus ? { color: '#24CCA7' } : { color: '#e0e0e0' }}
      >
        Income
      </span>
      <label className={s.checkboxLabel} onClick={onHandleCheckbox}>
        <input className={s.checkbox} type="checkbox" />
        <div className={s.checkboxIconBox} onClick={onHandleCheckbox}>
          {checkboxStatus ? (
            <HiOutlinePlus className={s.checkboxIcon} />
          ) : (
            <HiOutlineMinus className={s.checkboxIcon} />
          )}
        </div>
      </label>
      <span
        className={s.checkboxText}
        style={!checkboxStatus ? { color: '#FF6596' } : { color: '#e0e0e0' }}
      >
        Expense
      </span>
    </div>
  );
};
