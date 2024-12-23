import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Expense {
    id: string;
    description: string;
    amount: number;
    date: string;
}

interface ExpenseState {
    list: Expense[];
}

const initialState: ExpenseState = {
    list: [],
};

const expenseSlice = createSlice({
    name: 'expenses',
    initialState,
    reducers: {
        addExpense: (state, action: PayloadAction<Expense>) => {
            state.list.push(action.payload);
        },
        removeExpense: (state, action: PayloadAction<string>) => {
            state.list = state.list.filter(expense => expense.id !== action.payload);
        },
    },
});

export const { addExpense, removeExpense } = expenseSlice.actions;

export default expenseSlice.reducer;