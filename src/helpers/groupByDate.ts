import { format, parseISO } from 'date-fns';
import { uk } from 'date-fns/locale';
import { Expense } from '../types/types';

export const groupByDate = (expenses: Expense[]) => {
    return expenses.reduce((acc, expense) => {
        const date = format(parseISO(expense.date), 'dd MMM', { locale: uk });
        if (!acc[date]) {
            acc[date] = [];
        }
        acc[date].push(expense);
        return acc;
    }, {} as Record<string, Expense[]>);
};
