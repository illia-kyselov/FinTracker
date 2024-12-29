export const calculateDayBalance = (expenses: { amount: number }[]) => {
    const totalIncome = expenses
        .filter((expense) => expense.amount > 0)
        .reduce((sum, expense) => sum + expense.amount, 0);

    const totalExpenses = expenses
        .filter((expense) => expense.amount < 0)
        .reduce((sum, expense) => sum + Math.abs(expense.amount), 0);

    return +(totalIncome - totalExpenses).toFixed(2);
};