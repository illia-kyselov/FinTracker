import { parseISO } from 'date-fns';
import { Expense } from '../types/types';

export const sortGroupedExpensesByDate = (groupedExpenses: Record<string, Expense[]>) => {
    return Object.keys(groupedExpenses).sort((a, b) => {
        const dateA = parseISO(groupedExpenses[a][0].date);
        const dateB = parseISO(groupedExpenses[b][0].date);
        return dateB.getTime() - dateA.getTime();
    });
};
