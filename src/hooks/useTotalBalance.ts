import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { calculateTotalBalance } from '../helpers/calculateTotalBalance';

export const useTotalBalance = () => {
    const expenses = useSelector((state: RootState) => state.expenses.list);

    const totalBalance = calculateTotalBalance(expenses);

    return totalBalance;
};
