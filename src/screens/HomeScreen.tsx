import React from 'react';
import { View, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Colors, Padding, PaddingTop } from '../styles/tokens';
import MainHeader from '../components/MainHeader';
import ExpenseList from '../components/ExpenseList';
import BalanceTitle from '../components/BalanceTitle';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types/types';
import AddExpenseButton from '../components/UI/AddExpenseButton';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'AddExpense'>;

export default function HomeScreen() {
    const navigation = useNavigation<HomeScreenNavigationProp>();

    const handleAddExpense = () => {
        navigation.navigate('AddExpense');
    };

    return (
        <SafeAreaView style={styles.container}>
            <MainHeader />
            <BalanceTitle />
            <ExpenseList />

            <AddExpenseButton onPress={handleAddExpense} />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.primary,
        padding: Padding.p20,
        paddingTop: PaddingTop.pt50,
    },
});
