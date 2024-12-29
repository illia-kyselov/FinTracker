import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { categoryIcons } from '../styles/categoryIcons';
import { PaddingVertical, MarginBottom, FontSize, Colors } from '../styles/tokens';

interface ExpenseHistoryProps {
    groupedExpenses: Array<{ category: string; amount: number; transactions: number }>;
    pieData: Array<{ value: number; color: string }>
}

const ExpenseHistory: React.FC<ExpenseHistoryProps> = ({ groupedExpenses, pieData }) => {
    const filteredGroupedExpenses = groupedExpenses.filter(item => item.amount !== 0);

    return (
        <View style={styles.history}>
            {filteredGroupedExpenses.map((item, index) => (
                <View key={index} style={styles.expenseItem}>
                    <Ionicons
                        name={categoryIcons[item.category]}
                        size={22}
                        color={pieData[index].color}
                        style={styles.icon}
                    />
                    <View>
                        <Text style={styles.categoryText}>{item.category}</Text>
                        <Text style={styles.transactionCountText}>Транзакцій: {item.transactions}</Text>
                    </View>
                    <View style={styles.amountContainer}>
                        <Text style={styles.amountText} >
                            -{Math.abs(item.amount).toFixed(0)} ₴
                        </Text>
                        <Text style={styles.percentageText}>
                            {pieData[index].value === 0 ? '< 1%' : `${pieData[index].value}%`}
                        </Text>
                    </View>
                </View>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    history: {
        marginTop: 20,
        backgroundColor: Colors.primary,
        width: '100%',
    },
    expenseItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: PaddingVertical.pv10,
        marginBottom: MarginBottom.mb5,
        borderBottomWidth: 1,
        borderBottomColor: Colors.grey,
    },
    icon: {
        marginRight: 10,
    },
    categoryText: {
        color: Colors.mainText,
        fontSize: FontSize.fs16,
    },
    transactionCountText: {
        color: Colors.greyText,
        fontSize: FontSize.fs12,
    },
    amountContainer: {
        flex: 1,
        alignItems: 'flex-end',
    },
    amountText: {
        fontSize: FontSize.fs14,
        color: Colors.mainText,
        textAlign: 'right',
    },
    percentageText: {
        color: Colors.greyText,
        fontSize: FontSize.fs12,
    },
});

export default ExpenseHistory;
