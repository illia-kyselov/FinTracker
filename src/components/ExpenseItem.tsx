import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { format, parseISO } from 'date-fns';
import { uk } from 'date-fns/locale';
import { Colors, FontSize, MarginBottom, Padding, PaddingVertical, PaddingHorizontal, Radius } from '../styles/tokens';
import { calculateTotalBalance } from '../helpers/calculateTotalBalance';
import { Expense } from '../types/types';

interface ExpenseItemProps {
    item: Expense[];
}

const ExpenseItem: React.FC<ExpenseItemProps> = ({ item }) => {
    const dailyBalance = calculateTotalBalance(item);

    return (
        <View style={styles.expenseItem}>
            <View style={styles.dateContainer}>
                <Text style={styles.dateText}>
                    {format(parseISO(item[0].date), 'd MMM', { locale: uk })}
                </Text>
                <Text
                    style={[
                        styles.dailyBalance,
                        dailyBalance < 0
                            ? { color: '#FF6347', backgroundColor: 'hsla(0, 94.00%, 54.50%, 0.20)' }
                            : { color: Colors.greenText, backgroundColor: 'hsla(120, 100.00%, 25.10%, 0.20)' },
                    ]}
                >
                    {dailyBalance.toFixed(2)}₴
                </Text>
            </View>

            <FlatList
                data={[...item].reverse()}
                keyExtractor={(expense: Expense) => expense.id}
                renderItem={({ item }) => (
                    <View style={styles.expenseDescription}>
                        <Text style={styles.expenseText}>{item.description}</Text>
                        <Text
                            style={[
                                styles.amountText,
                                item.amount < 0 ? { color: Colors.redText } : { color: Colors.greenText },
                            ]}
                        >
                            {item.amount} ₴
                        </Text>
                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    expenseItem: {
        color: Colors.mainText,
        padding: Padding.p10,
        marginBottom: MarginBottom.mb10,
    },
    dateContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: MarginBottom.mb5,
    },
    dateText: {
        color: Colors.greenText,
        fontSize: FontSize.fs18,
        fontWeight: 'bold',
    },
    dailyBalance: {
        fontSize: FontSize.fs16,
        marginTop: MarginBottom.mb5,
        marginBottom: MarginBottom.mb10,
        paddingVertical: PaddingVertical.pv5,
        paddingHorizontal: PaddingHorizontal.ph10,
        borderRadius: Radius.r10,
        textAlign: 'center',
    },
    expenseDescription: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: PaddingVertical.pv10,
        marginBottom: MarginBottom.mb5,
        borderBottomWidth: 1,
        borderBottomColor: Colors.grey,
    },
    expenseText: {
        color: Colors.mainText,
        fontSize: FontSize.fs16,
    },
    amountText: {
        fontSize: FontSize.fs14,
        fontWeight: 'bold',
    },
});

export default ExpenseItem;
