import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Colors, MarginBottom, MarginRight, } from '../styles/tokens';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types/types';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'AddExpense'>;

const MainHeader: React.FC = () => {
    const navigation = useNavigation<HomeScreenNavigationProp>();

    const handleAddExpense = () => {
        navigation.navigate('AddExpense');
    };

    const handleStatsPress = () => {
        console.log('Stats icon pressed');
    };

    return (
        <View style={styles.header}>
            <TouchableOpacity onPress={handleStatsPress} style={styles.icon}>
                <Ionicons name="stats-chart-outline" size={30} color={Colors.greenText} />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleAddExpense} style={styles.icon}>
                <Ionicons name="add-circle-outline" size={30} color={Colors.greenText} />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'baseline',
        marginBottom: MarginBottom.mb20,
    },
    icon: {
        marginRight: MarginRight.mr10,
    },
});

export default MainHeader;
