import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Colors, MarginBottom } from '../styles/tokens';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types/types';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'AddExpense'>;

const MainHeader: React.FC = () => {
    const navigation = useNavigation<HomeScreenNavigationProp>();

    const handleAddExpense = () => {
        navigation.navigate('AddExpense');
    };

    return (
        <View style={styles.header}>
            <TouchableOpacity onPress={handleAddExpense}>
                <Icon name="add-circle-outline" size={28} color={Colors.greenText} />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginBottom: MarginBottom.mb20,
    },
});

export default MainHeader;
