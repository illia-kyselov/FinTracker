import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Colors, FontSize, PaddingTop, Padding } from '../styles/tokens';
import BackButtonHeader from '../components/UI/BackButtonHeader';
import Ionicons from 'react-native-vector-icons/Ionicons';

const FutureExpensesPage: React.FC = () => {
    return (
        <View style={styles.container}>
            <BackButtonHeader />
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <View style={styles.content}>
                    <Ionicons
                        name="alert"
                        size={50}
                        color={Colors.greenText}
                        style={styles.icon}
                    />
                    <Text style={styles.description}>
                        Сторінка в розробці...
                    </Text>
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
    scrollContainer: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        alignItems: 'center',
    },
    icon: {
        marginBottom: 20,
    },
    description: {
        color: Colors.greenText,
        fontSize: FontSize.fs18,
        textAlign: 'center',
    },
});

export default FutureExpensesPage;
