import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import DailyBalance from './DailyBalance';
import { format, parseISO } from 'date-fns';
import { uk } from 'date-fns/locale';
import { Colors, FontSize, MarginBottom, MarginTop, Padding } from '../styles/tokens';
import { calculatePastMonthTotal } from '../helpers/calculatePastMonthTotal';

interface MonthSummaryProps {
    expensesForMonth: any[];
}

const PastMonthItem: React.FC<MonthSummaryProps> = ({ expensesForMonth }) => {
    const totalAmount = calculatePastMonthTotal(expensesForMonth);

    return (
        <View style={styles.expenseItem}>
            <View style={styles.dateContainer}>
                <Text style={styles.dateText}>
                    {format(parseISO(expensesForMonth[0].date), 'LLLL yyyy', { locale: uk })}
                </Text>
                <DailyBalance dailyBalance={totalAmount} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    expenseItem: {
        color: Colors.mainText,
        marginBottom: MarginBottom.mb10,
    },
    dateContainer: {
        padding: Padding.p10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: Colors.grey,
    },
    dateText: {
        color: Colors.greenText,
        fontSize: FontSize.fs18,
        fontWeight: 'bold',
    },
});

export default PastMonthItem;
