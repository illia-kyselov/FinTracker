import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

import BackButtonHeader from '../components/UI/BackButtonHeader';
import PieChartComponent from '../components/PieChartComponent';
import ExpenseHistory from '../components/ExpenseHistory';

import { Colors, Padding, PaddingTop } from '../styles/tokens';

import { groupExpenses } from '../helpers/groupExpenses';
import { calculateTotalExpenses } from '../helpers/calculateTotalExpenses';
import { calculatePieData } from '../helpers/calculatePieData';


const AnalyticsScreen: React.FC = () => {
    const expenseCategories = useSelector((state: RootState) => state.categories.expenseCategories);
    const expenses = useSelector((state: RootState) => state.expenses.list);

    const groupedExpenses = groupExpenses(expenseCategories, expenses);
    const totalExpenses = calculateTotalExpenses(groupedExpenses);
    const pieData = calculatePieData(groupedExpenses, totalExpenses);

    return (
        <View style={styles.container}>
            <BackButtonHeader />
            <ScrollView>
                <View style={styles.chartContainer}>
                    <PieChartComponent pieData={pieData} totalExpenses={totalExpenses} />
                    <ExpenseHistory groupedExpenses={groupedExpenses} pieData={pieData} />
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.primary,
        paddingTop: PaddingTop.pt50,
        padding: Padding.p20,
    },
    chartContainer: {
        alignItems: 'center',
    },
});

export default AnalyticsScreen;