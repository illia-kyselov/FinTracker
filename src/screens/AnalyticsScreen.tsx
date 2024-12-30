import React from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

import BackButtonHeader from '../components/UI/BackButtonHeader';
import PieChartComponent from '../components/PieChartComponent';
import ExpenseHistory from '../components/ExpenseHistory';

import { Colors, FontSize, MarginTop, Padding, PaddingTop } from '../styles/tokens';
import { GroupedExpense, Category, Expense, RootStackParamList, StackNavigationProp } from '../types/types';

import { groupExpenses } from '../helpers/groupExpenses';
import { calculateTotalExpenses } from '../helpers/calculateTotalExpenses';
import { calculatePieData } from '../helpers/calculatePieData';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

type FutureExpensesPageNavigationProp = StackNavigationProp<RootStackParamList, 'AddExpense'>;

const AnalyticsScreen: React.FC = () => {
    const navigation = useNavigation<FutureExpensesPageNavigationProp>();
    const expenseCategories: Category[] = useSelector((state: RootState) =>
        state.categories.expenseCategories.map((categoryName: string) => ({ name: categoryName }))
    );
    const expenses: Expense[] = useSelector((state: RootState) => state.expenses.list);

    const groupedExpenses: GroupedExpense[] = groupExpenses(expenseCategories, expenses);
    const totalExpenses: number = calculateTotalExpenses(groupedExpenses);
    const pieData = calculatePieData(groupedExpenses, totalExpenses);

    const hasData = groupedExpenses.length > 0 && totalExpenses > 0;

    const handleNavigateToAnalyticsPage = () => {
        navigation.navigate('FutureExpensesPage');
    };

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <BackButtonHeader />
                {hasData &&
                    <Ionicons
                        name="analytics"
                        size={24}
                        color={Colors.greenText}
                        onPress={handleNavigateToAnalyticsPage}
                        style={styles.analyticsIcon}
                    />}
            </View>
            <ScrollView>
                {hasData ? (
                    <View style={styles.chartContainer}>
                        <PieChartComponent pieData={pieData} totalExpenses={totalExpenses} />
                        <ExpenseHistory groupedExpenses={groupedExpenses} pieData={pieData} />
                    </View>
                ) : (
                    <Text style={styles.noDataText}>Додайте дані про свої витрати...</Text>
                )}
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
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%'
    },
    analyticsIcon: {
        marginLeft: 'auto',
    },
    chartContainer: {
        alignItems: 'center',
    },
    noDataText: {
        color: Colors.greenText,
        textAlign: 'center',
        marginTop: MarginTop.mt20,
        fontSize: FontSize.fs16,
    },
});

export default AnalyticsScreen;
