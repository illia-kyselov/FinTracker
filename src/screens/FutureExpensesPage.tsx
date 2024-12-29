import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Button, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store'; // Убедитесь, что этот путь верный
import { Colors, FontSize, MarginTop, Padding, PaddingTop } from '../styles/tokens';
import BackButtonHeader from '../components/UI/BackButtonHeader';

const FutureExpensesPage: React.FC = () => {
    const [forecast, setForecast] = useState<number | null>(null);

    // Получаем данные из Redux Store
    const expenses = useSelector((state: RootState) => state.expenses.list);

    useEffect(() => {
        // Выводим данные в консоль при загрузке компонента
        console.log('Expenses:', expenses);
    }, [expenses]);

    return (
        <View style={styles.container}>
            <BackButtonHeader />

            <Text style={styles.header}>Future Expenses Prediction</Text>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <Text style={styles.description}>
                    Based on your past expenses, we estimate your spending for the next month.
                </Text>
                {forecast !== null ? (
                    <View style={styles.forecastContainer}>
                        <Text style={styles.forecastText}>
                            Your predicted expenses for next month: {forecast} USD
                        </Text>
                    </View>
                ) : (
                    <Text style={styles.loadingText}>Calculating forecast...</Text>
                )}
                <Button title="Refresh Forecast" onPress={() => setForecast(null)} />
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
    header: {
        fontSize: FontSize.fs27,
        fontWeight: 'bold',
        color: Colors.mainText,
        textAlign: 'center',
        marginBottom: MarginTop.mt20,
    },
    scrollContainer: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    description: {
        color: Colors.mainText,
        fontSize: FontSize.fs16,
        textAlign: 'center',
        marginBottom: MarginTop.mt20,
    },
    forecastContainer: {
        marginTop: MarginTop.mt20,
        alignItems: 'center',
    },
    forecastText: {
        fontSize: FontSize.fs22,
        fontWeight: 'bold',
        color: Colors.greenText,
    },
    loadingText: {
        fontSize: FontSize.fs16,
        color: Colors.greyText,
    },
});

export default FutureExpensesPage;
