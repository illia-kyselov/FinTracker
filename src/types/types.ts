import { StackNavigationProp } from "@react-navigation/stack";

export type RootStackParamList = {
    Home: undefined;
    AddExpense: undefined;
};

export interface Expense {
    id: string;
    description: string;
    amount: number;
    date: string;
}

export type AddExpenseScreenNavigationProp = StackNavigationProp<RootStackParamList, 'AddExpense'>;

export { StackNavigationProp };
