import { StackNavigationProp } from "@react-navigation/stack";

export type RootStackParamList = {
    Home: undefined;
    AddExpense: undefined;
    Analytics: undefined;
};

export interface Expense {
    id: string;
    description: string;
    amount: number;
    date: string;
    category: string;
}

export interface GroupedExpense {
    category: string;
    amount: number;
    transactions: number;
}

export interface Category {
    name: string;
}

export type AddExpenseScreenNavigationProp = StackNavigationProp<RootStackParamList, 'AddExpense'>;

export { StackNavigationProp };
