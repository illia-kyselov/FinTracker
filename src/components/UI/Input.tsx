import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import { Colors, Padding, Radius } from '../../styles/tokens';

interface InputProps {
    placeholder: string;
    value: string;
    onChangeText: (text: string) => void;
    style?: object;
}

const Input: React.FC<InputProps> = ({
    placeholder,
    value,
    onChangeText,
    style,
}) => {
    return (
        <TextInput
            style={[styles.input, style]}
            placeholder={placeholder}
            placeholderTextColor={Colors.placeholder}
            value={value}
            onChangeText={onChangeText}
            keyboardType="default"
            maxLength={25}
        />
    );
};

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: Colors.greenText,
        borderRadius: Radius.r10,
        padding: Padding.p10,
        color: Colors.mainText,
    },
});

export default Input;
