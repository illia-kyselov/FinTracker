import { useDispatch } from 'react-redux';
import { addExpense } from '../store/slices/expenseSlice';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types/types';

type AddExpenseScreenNavigationProp = StackNavigationProp<RootStackParamList, 'AddExpense'>;

export const useAddExpense = () => {
    const dispatch = useDispatch();

    const handleAddExpense = (amount: string, type: string, navigation: AddExpenseScreenNavigationProp, category: string, description?: string) => {
        if (description || amount) {
            const newExpense = {
                id: Math.random().toString(),
                description: description || '',
                amount: type === 'expense' ? -parseFloat(amount) : parseFloat(amount),
                date: new Date().toISOString(),
                category,
            };

            dispatch(addExpense(newExpense));
            navigation.goBack();
        }
    };

    return handleAddExpense;
};
