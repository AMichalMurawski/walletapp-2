import scss from './Balance.module.scss';

export const Balance = () => {
  return (
    <div className={scss.balance}>
      <div className={scss.balanceMain}>
        <div className={scss.balanceTitle}>Your Balance</div>
        <div className={scss.balanceNumber}>Balance</div>
      </div>
    </div>
  );
};
