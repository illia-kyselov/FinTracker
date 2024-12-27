import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import BackButtonHeader  from '../components/BackButtonHeader';
import TabsButtons from '../components/TabsButtons';
import ExpenseForm from '../components/ExpenseForm';
import { Colors, Padding, PaddingTop } from '../styles/tokens';

type RootStackParamList = {
    Home: undefined;
    AddExpense: undefined;
};

type AddExpenseScreenNavigationProp = StackNavigationProp<RootStackParamList, 'AddExpense'>;

interface Props {
    navigation: AddExpenseScreenNavigationProp;
}

export default function AddExpenseScreen({ navigation }: Props) {
    const [type, setType] = useState<'income' | 'expense'>('expense');

    return (
        <View style={styles.container}>
            <BackButtonHeader  />
            <TabsButtons type={type} setType={setType} />
            <ExpenseForm type={type} navigation={navigation} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.primary,
        paddingTop: PaddingTop.pt50,
        padding: Padding.p20,
    },
});
