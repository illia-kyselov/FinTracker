import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { Colors, Radius } from '../../styles/tokens';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface CategoryPickerProps {
    selectedValue: string;
    onValueChange: (value: string) => void;
    categories: string[];
    defaultCategory?: string;
}

const CategoryPicker: React.FC<CategoryPickerProps> = ({
    selectedValue,
    onValueChange,
    categories,
    defaultCategory,
}) => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState<string | null>(selectedValue);
    const [items, setItems] = useState(
        categories.map((category) => ({ label: category, value: category }))
    );

    useEffect(() => {
        if (categories.indexOf(selectedValue) === -1) {
            setValue("Без категорії");
            onValueChange("Без категорії");
        } else {
            setItems(categories.map((category) => ({ label: category, value: category })));
        }
    }, [categories, selectedValue, onValueChange]);

    useEffect(() => {
        if (defaultCategory && !selectedValue) {
            setValue(defaultCategory);
            onValueChange(defaultCategory);
        }
    }, [defaultCategory, selectedValue, onValueChange]);

    return (
        <View>
            <DropDownPicker
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={(value) => {
                    setValue(value);
                    onValueChange(value as unknown as string);
                }}
                setItems={setItems}
                style={styles.dropdown}
                dropDownContainerStyle={styles.dropDownContainer}
                textStyle={styles.text}
                ArrowUpIconComponent={() => (
                    <View style={[styles.arrowIcon, styles.arrowUp]} />
                )}
                ArrowDownIconComponent={() => (
                    <View style={[styles.arrowIcon, styles.arrowDown]} />
                )}
                TickIconComponent={() => (
                    <Ionicons name="checkmark" size={18} color={Colors.greenText} />
                )}
                selectedItemLabelStyle={styles.selectedItemLabel}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    dropdown: {
        borderColor: Colors.greenText,
        backgroundColor: Colors.primary,
        borderRadius: Radius.r10,
    },
    dropDownContainer: {
        backgroundColor: Colors.primary,
        borderColor: Colors.greenText,
    },
    text: {
        color: Colors.placeholder,
    },
    arrowIcon: {
        width: 10,
        height: 10,
        borderTopWidth: 2,
        borderRightWidth: 2,
        marginRight: 10,
        borderColor: Colors.greenText,
    },
    arrowUp: {
        transform: [{ rotate: '-45deg' }],
    },
    arrowDown: {
        transform: [{ rotate: '45deg' }],
    },
    selectedItemLabel: {
        color: Colors.greenText,
    },
    itemStyle: {
        backgroundColor: Colors.primary,
        color: Colors.greenText,
    },
});

export default CategoryPicker;
