export const isPastMonth = (expenseDate: string): boolean => {
    const expenseMonth = new Date(expenseDate).getMonth();
    const expenseYear = new Date(expenseDate).getFullYear();
    const currentMonth = new Date().getMonth();
    const currentYear = new Date().getFullYear();

    return expenseYear < currentYear || (expenseYear === currentYear && expenseMonth < currentMonth);
};
