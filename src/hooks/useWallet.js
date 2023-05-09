import { useSelector } from 'react-redux';
import {
  selectId,
  selectBalance,
  selectTransactions,
  selectCategories,
  selectSummary,
} from '../redux/wallet/selectors';

export const useWallet = () => {
  const id = useSelector(selectId);
  const balance = useSelector(selectBalance);
  const transactions = useSelector(selectTransactions);
  const categories = useSelector(selectCategories);
  const summary = useSelector(selectSummary);
  return {
    id,
    balance,
    transactions,
    categories,
    summary,
  };
};
