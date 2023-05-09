import { useWallet } from '../../hooks';
import scss from './Balance.module.scss';

export const Balance = () => {
  const { balance } = useWallet();

  return (
    <div className={scss.balance}>
      <div className={scss.balanceMain}>
        <div className={scss.balanceTitle}>Your Balance</div>
        <div className={scss.balanceNumber}>{balance}</div>
      </div>
    </div>
  );
};
