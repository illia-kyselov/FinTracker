import React from 'react';
import { View, StyleSheet } from 'react-native';
import TabButton from './UI/TabButton';

interface TabsButtonsProps {
    type: 'income' | 'expense';
    setType: React.Dispatch<React.SetStateAction<'income' | 'expense'>>;
}

const TabsButtons: React.FC<TabsButtonsProps> = ({ type, setType }) => {
    return (
        <View style={styles.tabsButtons}>
            <TabButton
                label="Дохід"
                isActive={type === 'income'}
                onPress={() => setType('income')}
            />
            <TabButton
                label="Витрати"
                isActive={type === 'expense'}
                onPress={() => setType('expense')}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    tabsButtons: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
});

export default TabsButtons;
