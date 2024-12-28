import { Category, Expense, GroupedExpense } from "../types/types";

export const groupExpenses = (categories: Category[], expenses: Expense[]): GroupedExpense[] => {
    const groupedExpenses = categories.map((category) => {
        const categoryExpenses = expenses.filter((expense) => expense.category === category.name);
        const categorySum = categoryExpenses.reduce((sum, expense) => sum + expense.amount, 0);
        return { category: category.name, amount: categorySum, transactions: categoryExpenses.length };
    });

    return groupedExpenses.sort((a, b) => a.amount - b.amount);
};
