import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Colors, FontSize, Padding, Radius } from '../../styles/tokens';

interface SubmitButtonProps {
    onPress: () => void;
    text: string;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ onPress, text }) => {
    return (
        <TouchableOpacity style={styles.addButton} onPress={onPress}>
            <Text style={styles.addButtonText}>{text}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    addButton: {
        backgroundColor: Colors.greenText,
        paddingVertical: Padding.p10,
        paddingHorizontal: Padding.p20,
        borderRadius: Radius.r10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    addButtonText: {
        color: Colors.black,
        fontSize: FontSize.fs16,
    },
});

export default SubmitButton;
