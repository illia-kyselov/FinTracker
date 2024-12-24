import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { Colors, Radius } from '../../styles/tokens';
import { Picker } from '@react-native-picker/picker';

interface CategoryPickerProps {
    selectedValue: string;
    onValueChange: (value: string) => void;
    categories: string[];
    defaultCategory?: string;
}

const CategoryPicker: React.FC<CategoryPickerProps> = ({ selectedValue, onValueChange, categories, defaultCategory }) => {
    useEffect(() => {
        if (defaultCategory && !selectedValue) {
            onValueChange(defaultCategory);
        }
    }, [defaultCategory, selectedValue, onValueChange]);

    return (
        <View style={styles.inputWrapper}>
            <Picker
                selectedValue={selectedValue}
                onValueChange={onValueChange}
                style={styles.inputValue}
            >
                {categories.map((category, index) => (
                    <Picker.Item key={index} label={category} value={category} />
                ))}
            </Picker>
        </View>
    );
};

const styles = StyleSheet.create({
    inputWrapper: {
        borderWidth: 1,
        borderColor: Colors.greenText,
        borderRadius: Radius.r10,
        color: Colors.mainText,
    },
    inputValue: {
        color: Colors.placeholder,
    }
});

export default CategoryPicker;
