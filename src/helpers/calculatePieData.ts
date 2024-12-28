export const calculatePieData = (groupedExpenses: any[], totalExpenses: number) => {
    return groupedExpenses
        .filter((item: { amount: number; }) => Math.abs(item.amount) > 0)
        .map((item: { amount: number; }, index: number) => ({
            value: Math.round((Math.abs(item.amount) / Math.abs(totalExpenses)) * 100),
            color: ['#009FFF', '#93FCF8', '#BDB2FA', '#FFA5BA', '#FFCD56', '#56D8FF', '#D456FF'][index % 7],
            gradientCenterColor: ['#006DFF', '#3BE9DE', '#8F80F3', '#FF7F97', '#FFAA00', '#009BFF', '#9900FF'][index % 7],
        }));
};