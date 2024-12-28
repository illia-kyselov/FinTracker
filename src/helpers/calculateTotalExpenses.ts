import { GroupedExpense } from "../types/types";

export const calculateTotalExpenses = (groupedExpenses: GroupedExpense[]): number => {
    return groupedExpenses.reduce((sum, item) => sum + Math.abs(item.amount), 0);
};