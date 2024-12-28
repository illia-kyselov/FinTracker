export const calculateTotalExpenses = (groupedExpenses: any[]) => {
    return groupedExpenses.reduce((sum: number, item: { amount: number; }) => sum + Math.abs(item.amount), 0);
};