import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Input from '../components/UI/Input';
import SubmitButton from '../components/UI/SubmitButton';
import { Colors, FontSize, MarginBottom, MarginTop, PaddingTop } from '../styles/tokens';
import { useAddExpense } from '../hooks/useAddExpense';
import { AddExpenseScreenNavigationProp } from '../types/types';

interface ExpenseFormProps {
    type: 'income' | 'expense';
    navigation: AddExpenseScreenNavigationProp;
}

const ExpenseForm: React.FC<ExpenseFormProps> = ({ type, navigation }) => {
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState('');
    const [errors, setErrors] = useState<{ description?: string; amount?: string }>({});

    const handleAddExpense = useAddExpense();

    const handleSubmit = () => {
        const newErrors: { description?: string; amount?: string } = {};

        if (!description) {
            newErrors.description = 'Це поле обов\'язкове';
        } else if (!isNaN(Number(description))) {
            newErrors.description = 'Тут має бути тільки текст';
        }

        if (!amount) newErrors.amount = 'Це поле обов\'язкове';
        else if (isNaN(Number(amount))) newErrors.amount = 'Тут має бути тільки число';

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        handleAddExpense(description, amount, type, navigation);
    };

    return (
        <View style={styles.container}>
            <View style={styles.inputWrapper}>
                <Input
                    placeholder="Опис"
                    value={description}
                    onChangeText={setDescription}
                    style={errors.description ? styles.inputError : {}}
                />
                {errors.description && <Text style={styles.errorText}>{errors.description}</Text>}
            </View>

            <View style={styles.inputWrapper}>
                <Input
                    placeholder="Скільки?"
                    value={amount}
                    onChangeText={setAmount}
                    style={errors.amount ? styles.inputError : {}}
                />
                {errors.amount && <Text style={styles.errorText}>{errors.amount}</Text>}
            </View>

            <SubmitButton onPress={handleSubmit} text="Додати" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.primary,
        paddingTop: PaddingTop.pt50,
    },
    inputWrapper: {
        marginBottom: MarginBottom.mb20,
    },
    inputError: {
        borderColor: Colors.error,
    },
    errorText: {
        color: Colors.error,
        fontSize: FontSize.fs12,
        marginTop: MarginTop.mt20,
    },
});

export default ExpenseForm;
