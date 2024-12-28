import React from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import { PieChart } from 'react-native-gifted-charts';
import BackButtonHeader from '../components/UI/BackButtonHeader';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { categoryIcons } from '../styles/categoryIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Colors, FontSize, MarginBottom, MarginRight, MarginTop, Padding, PaddingTop, PaddingVertical, Radius } from '../styles/tokens';

const AnalyticsScreen: React.FC = () => {
    const expenseCategories = useSelector((state: RootState) => state.categories.expenseCategories);
    const expenses = useSelector((state: RootState) => state.expenses.list);

    const groupedExpenses = expenseCategories.map((category) => {
        const categoryExpenses = expenses.filter((expense) => expense.category === category);
        const categorySum = categoryExpenses.reduce((sum, expense) => sum + expense.amount, 0);
        return { category, amount: categorySum, transactions: categoryExpenses.length };
    });

    const totalExpenses = groupedExpenses.reduce((sum, item) => sum + Math.abs(item.amount), 0);

    const pieData = groupedExpenses
        .filter((item) => Math.abs(item.amount) > 0)
        .map((item, index) => ({
            value: Math.round((Math.abs(item.amount) / Math.abs(totalExpenses)) * 100),
            color: ['#009FFF', '#93FCF8', '#BDB2FA', '#FFA5BA', '#FFCD56', '#56D8FF', '#D456FF'][index % 7],
            gradientCenterColor: ['#006DFF', '#3BE9DE', '#8F80F3', '#FF7F97', '#FFAA00', '#009BFF', '#9900FF'][index % 7],
        }));

    return (
        <View style={styles.container}>
            <BackButtonHeader />
            <ScrollView>
                <View style={styles.chart}>
                    {pieData.length > 0 ? (
                        <>
                            <PieChart
                                data={pieData}
                                radius={90}
                                innerRadius={60}
                                showText={true}
                                textColor={Colors.greenText}
                                textSize={16}
                                innerCircleColor={Colors.primary}
                                donut
                                showGradient
                                sectionAutoFocus
                                centerLabelComponent={() => (
                                    <View style={styles.centerLabel}>
                                        <Text style={styles.totalAmount}>-{totalExpenses.toFixed(0)} ₴</Text>
                                    </View>
                                )}
                            />
                            <View style={styles.history}>
                                {groupedExpenses.map((item, index) => (
                                    <View key={index} style={styles.expenseItem}>
                                        <Ionicons
                                            name={categoryIcons[item.category]}
                                            size={22}
                                            color={Colors.greenText}
                                            style={styles.icon}
                                        />
                                        <View>
                                            <Text style={styles.categoryText}>{item.category}</Text>
                                            <Text style={styles.transactionCountText}>
                                                Транзакцій: {item.transactions}
                                            </Text>
                                        </View>
                                        <View style={styles.amountContainer}>
                                            <Text
                                                style={[
                                                    styles.amountText,
                                                    item.amount > 0 ? { color: Colors.greenText } : { color: Colors.mainText },
                                                ]}
                                            >
                                                -{Math.abs(item.amount).toFixed(0)} ₴
                                            </Text>
                                            <Text style={styles.percentageText}>
                                                {pieData[index].value === 0 ? '< 1%' : `${pieData[index].value}%`}
                                            </Text>
                                        </View>
                                    </View>
                                ))}
                            </View>
                        </>
                    ) : (
                        <Text style={styles.noDataText}>Не було додано жодних витрат...</Text>
                    )}
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
    chart: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    centerLabel: {
        justifyContent: 'center',
        alignItems: 'center',
        color: Colors.greenText
    },
    totalAmount: {
        fontSize: FontSize.fs22,
        color: Colors.greenText,
        fontWeight: 'bold',
    },
    history: {
        marginTop: MarginTop.mt20,
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
        marginRight: MarginRight.mr10,
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
        textAlign: 'right',
    },
    percentageText: {
        color: Colors.greyText,
        fontSize: FontSize.fs12,
    },
    noDataText: {
        color: Colors.greenText,
        textAlign: 'center',
    },
});

export default AnalyticsScreen;
