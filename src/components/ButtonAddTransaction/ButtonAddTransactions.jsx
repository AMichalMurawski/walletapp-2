import { useDispatch } from 'react-redux';
import { HiOutlinePlus } from 'react-icons/hi';
import { toggleShowModalAddTransaction } from '../../redux/modal/modalSlice';
import s from './ButtonAddTransactions.module.scss';

export const ButtonAddTransactions = () => {
  const dispatch = useDispatch();
  const handleAddBtn = () => {
    dispatch(toggleShowModalAddTransaction(true));
  };
  return (
    <div>
      <button className={s.openBtn} type="button" onClick={handleAddBtn}>
        <div className={s.buttonInsideBox}>
          <HiOutlinePlus className={s.openBtnIcon}></HiOutlinePlus>
        </div>
      </button>
    </div>
  );
};