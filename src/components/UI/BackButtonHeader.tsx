import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { PaddingVertical, PaddingHorizontal, Colors } from '../../styles/tokens';
import { RootStackParamList } from '../../types/types';

type AddExpenseScreenNavigationProp = StackNavigationProp<RootStackParamList, 'AddExpense'>;

const BackButtonHeader: React.FC = () => {
    const navigation = useNavigation<AddExpenseScreenNavigationProp>();

    const onBackPress = () => {
        navigation.goBack();
    };

    return (
        <View style={styles.header}>
            <TouchableOpacity onPress={onBackPress}>
                <Icon name="arrow-back-outline" size={30} color={Colors.greenText} />
            </TouchableOpacity>
            <View style={{ width: 24 }} />
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: PaddingVertical.pv15,
        paddingHorizontal: PaddingHorizontal.ph10,
        backgroundColor: Colors.primary,
    },
});

export default BackButtonHeader;
