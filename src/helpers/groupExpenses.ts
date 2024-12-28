export const groupExpenses = (categories: any[], expenses: any[]) => {
    return categories.map((category: any) => {
        const categoryExpenses = expenses.filter((expense: { category: any; }) => expense.category === category);
        const categorySum = categoryExpenses.reduce((sum: any, expense: { amount: any; }) => sum + expense.amount, 0);
        return { category, amount: categorySum, transactions: categoryExpenses.length };
    });
};