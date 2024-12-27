import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types/types';
import { Colors, Padding, PaddingTop } from '../styles/tokens';
import Ionicons from 'react-native-vector-icons/Ionicons';
import BackButtonHeader from '../components/UI/BackButtonHeader';

type AnalyticsScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Analytics'>;

const AnalyticsScreen: React.FC = () => {
    const navigation = useNavigation<AnalyticsScreenNavigationProp>();

    const handleBack = () => {
        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            <BackButtonHeader />

            <ScrollView contentContainerStyle={styles.content}>
                <View style={styles.statBlock}>
                    <Text style={styles.statValue}>$3000</Text>
                </View>

                <View style={styles.statBlock}>
                    <Text style={styles.statValue}>$1500</Text>
                </View>

                <View style={styles.statBlock}>
                    <Text style={styles.statValue}>$1500</Text>
                </View>

                <View style={styles.chart}>
                    <Text style={styles.statValue}>$1500</Text>
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
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: Padding.p20,
    },
    backButton: {
        marginRight: Padding.p10,
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: Colors.greenText,
    },
    content: {
        paddingBottom: Padding.p20,
    },
    statBlock: {
        marginBottom: Padding.p20,
        padding: Padding.p20,
        backgroundColor: Colors.primary,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    statTitle: {
        fontSize: 18,
        color: Colors.greenText,
        marginBottom: Padding.p10,
    },
    statValue: {
        fontSize: 24,
        fontWeight: 'bold',
        color: Colors.greenText,
    },
    chart: {
        padding: Padding.p20,
        backgroundColor: Colors.primary,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    chartTitle: {
        fontSize: 18,
        color: Colors.greenText,
        marginBottom: Padding.p20,
    },
});

export default AnalyticsScreen;
