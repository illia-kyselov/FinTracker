import React from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import { Colors, Padding, PaddingTop } from '../styles/tokens';
import ExpenseList from '../components/ExpenseList';
import BalanceTitle from '../components/BalanceTitle';
import MainHeader from '../components/MainHeader';

export default function HomeScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <MainHeader />

            <BalanceTitle />

            <ExpenseList />
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
