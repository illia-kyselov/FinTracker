import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';
import { Colors, FontSize, PaddingBottom, Radius } from '../../styles/tokens';

interface TabButtonProps {
    label: string;
    isActive: boolean;
    onPress: () => void;
}

const TabButton: React.FC<TabButtonProps> = ({ label, isActive, onPress }) => {
    return (
        <TouchableOpacity
            style={styles.tabButton}
            onPress={onPress}
        >
            <Text style={styles.typeButtonText}>{label}</Text>
            {isActive && <View style={styles.activeBorder} />}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    tabButton: {
        paddingBottom: PaddingBottom.pb10,
        backgroundColor: Colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
    },
    activeBorder: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 2,
        backgroundColor: Colors.greenText,
        borderRadius: Radius.r10,
    },
    typeButtonText: {
        color: Colors.mainText,
        fontSize: FontSize.fs16,
        fontWeight: 'bold',
    },
});

export default TabButton;
