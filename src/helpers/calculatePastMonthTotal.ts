import { Expense } from "../types/types";

export const calculatePastMonthTotal = (expenses: Expense[]) => {
    return expenses.reduce((total, expense) => total + expense.amount, 0);
};