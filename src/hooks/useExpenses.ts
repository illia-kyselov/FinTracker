import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { groupByDate } from '../helpers/groupByDate';

export const useExpenses = () => {
    const expenses = useSelector((state: RootState) => state.expenses.list);

    const groupedExpenses = groupByDate(expenses);

    return { groupedExpenses };
};
