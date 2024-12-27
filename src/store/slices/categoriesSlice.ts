import { createSlice } from '@reduxjs/toolkit';

interface CategoriesState {
    expenseCategories: string[];
    incomeCategories: string[];
}

const initialState: CategoriesState = {
    expenseCategories: [
        'Їжа та напої',
        'Без категорії',
        'Бакалія',
        'Транспорт',
        'Інтернет',
        'Оренда',
        'Розваги',
        'Покупки',
    ],
    incomeCategories: [
        'Заробітня плата',
        'Без категорії',
        'Бюджет',
    ],
};

const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        setExpenseCategories: (state, action) => {
            state.expenseCategories = action.payload;
        },
        setIncomeCategories: (state, action) => {
            state.incomeCategories = action.payload;
        },
    },
});

export const { setExpenseCategories, setIncomeCategories } = categoriesSlice.actions;

export default categoriesSlice.reducer;