import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { format, parseISO } from 'date-fns';
import { uk } from 'date-fns/locale';
import { Colors, FontSize, MarginBottom, Padding, PaddingVertical, PaddingHorizontal, Radius, MarginRight } from '../styles/tokens';
import { calculateDayBalance } from '../helpers/calculateDayBalance';
import { Expense } from '../types/types';
import DailyBalance from './DailyBalance';
import ExpenseDescription from './ExpenseDescription';

interface ExpenseItemProps {
    item: Expense[];
}

const ExpenseItem: React.FC<ExpenseItemProps> = ({ item }) => {
    const dailyBalance = calculateDayBalance(item);

    return (
        <View style={styles.expenseItem}>
            <View style={styles.dateContainer}>
                <Text style={styles.dateText}>
                    {format(parseISO(item[0].date), 'd MMM', { locale: uk })}
                </Text>
                <DailyBalance dailyBalance={dailyBalance} />
            </View>

            <FlatList
                data={[...item].reverse()}
                keyExtractor={(expense: Expense) => expense.id}
                renderItem={({ item }) => (
                    <ExpenseDescription
                        category={item.category}
                        description={item.description}
                        amount={item.amount}
                    />
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
        alignItems: 'center',
        paddingVertical: PaddingVertical.pv10,
        marginBottom: MarginBottom.mb5,
        borderBottomWidth: 1,
        borderBottomColor: Colors.grey,
    },
    icon: {
        marginRight: MarginRight.mr10,
        alignSelf: 'center',
    },
    expenseText: {
        color: Colors.mainText,
        fontSize: FontSize.fs16,
    },
    subText: {
        color: Colors.greyText,
        fontSize: FontSize.fs12,
    },
    amountText: {
        flex: 1,
        fontSize: FontSize.fs14,
        textAlign: 'right',
    },
});

export default ExpenseItem;
