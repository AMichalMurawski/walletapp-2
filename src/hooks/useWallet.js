import { useSelector } from 'react-redux';
import { selectBalance, selectTransactions } from '../redux/wallet/selectors';

export const useWallet = () => {
  const balance = useSelector(selectBalance);
  const transactions = useSelector(selectTransactions);
  return {
    balance,
    transactions,
  };
};
