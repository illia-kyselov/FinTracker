import { parseISO, isSameMonth } from 'date-fns';

export const calculateTotalBalance = (expenses: { amount: number; date: string }[]) => {
    const currentDate = new Date();

    const currentMonthExpenses = expenses.filter((expense) =>
        isSameMonth(parseISO(expense.date), currentDate)
    );

    const totalIncome = currentMonthExpenses
        .filter((expense) => expense.amount > 0)
        .reduce((sum, expense) => sum + expense.amount, 0);

    const totalExpenses = currentMonthExpenses
        .filter((expense) => expense.amount < 0)
        .reduce((sum, expense) => sum + Math.abs(expense.amount), 0);

    return +(totalIncome - totalExpenses).toFixed(2);
};
