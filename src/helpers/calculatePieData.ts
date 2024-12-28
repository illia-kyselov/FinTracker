import { GroupedExpense } from "../types/types";

export const calculatePieData = (groupedExpenses: GroupedExpense[], totalExpenses: number) => {
    return groupedExpenses
        .filter((item) => Math.abs(item.amount) > 0)
        .map((item, index) => ({
            value: Math.round((Math.abs(item.amount) / Math.abs(totalExpenses)) * 100),
            color: [
                '#FF00FF',
                '#00FFFF',
                '#32CD32',
                '#FFFF00',
                '#FF1493',
                '#00BFFF',
                '#8A2BE2',
                '#FF69B4',
            ][index % 8],
            gradientCenterColor: [
                '#FF00FF',
                '#00FFFF',
                '#00FF00',
                '#FFFF00',
                '#FF1493',
                '#00BFFF',
                '#8A2BE2',
                '#FF1493',
            ][index % 8],
        }));
};
