import { GroupedExpense } from "../types/types";

export const calculatePieData = (groupedExpenses: GroupedExpense[], totalExpenses: number) => {
    return groupedExpenses
        .filter((item) => Math.abs(item.amount) > 0)
        .map((item, index) => ({
            value: Math.round((Math.abs(item.amount) / Math.abs(totalExpenses)) * 100),
            color: ['#009FFF', '#93FCF8', '#BDB2FA', '#FFA5BA', '#FFCD56', '#56D8FF', '#D456FF'][index % 7],
            gradientCenterColor: ['#006DFF', '#3BE9DE', '#8F80F3', '#FF7F97', '#FFAA00', '#009BFF', '#9900FF'][index % 7],
        }));
};