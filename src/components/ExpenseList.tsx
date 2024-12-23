import React from 'react';
import { FlatList, Text, StyleSheet } from 'react-native';
import ExpenseItem from './ExpenseItem';
import { Colors, FontSize, MarginTop } from '../styles/tokens';
import { useExpenses } from '../hooks/useExpenses';


const ExpenseList: React.FC = () => {
    const { groupedExpenses } = useExpenses();

    return (
        <FlatList
            data={Object.keys(groupedExpenses)}
            keyExtractor={(item) => item}
            renderItem={({ item }) => <ExpenseItem item={groupedExpenses[item]} />}
            ListEmptyComponent={
                <Text style={styles.noExpensesText}>Немає даних</Text>
            }
        />
    );
};

const styles = StyleSheet.create({
    noExpensesText: {
        color: Colors.greenText,
        textAlign: 'center',
        marginTop: MarginTop.mt20,
        fontSize: FontSize.fs16,
    },
});

export default ExpenseList;
