import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { useSelector } from 'react-redux';
import Input from '../components/UI/Input';
import SubmitButton from '../components/UI/SubmitButton';
import CategoryPicker from '../components/UI/CategoryPicker';
import { Colors, FontSize, Gap, MarginBottom, PaddingTop } from '../styles/tokens';
import { useAddExpense } from '../hooks/useAddExpense';
import { AddExpenseScreenNavigationProp } from '../types/types';
import { RootState } from '../store/store';

interface ExpenseFormProps {
    type: 'income' | 'expense';
    navigation: AddExpenseScreenNavigationProp;
}

const ExpenseForm: React.FC<ExpenseFormProps> = ({ type, navigation }) => {
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState('');
    const [category, setCategory] = useState<string>('Без категорії');
    const [errors, setErrors] = useState<{ description?: string; amount?: string; category?: string }>({});

    const handleAddExpense = useAddExpense();

    const expenseCategories = useSelector((state: RootState) => state.categories.expenseCategories);
    const incomeCategories = useSelector((state: RootState) => state.categories.incomeCategories);

    const handleSubmit = () => {
        const newErrors: { description?: string; amount?: string } = {};

        if (!amount || !/^\d+(\.\d+)?$/.test(amount)) {
            newErrors.amount = !amount ? 'Це поле обов\'язкове' : 'Тут має бути тільки число';
        }

        if (description && /\d/.test(description)) {
            newErrors.description = 'Тут має бути тільки текст';
        }

        if (Object.keys(newErrors).length) {
            setErrors(newErrors);
            return;
        }

        handleAddExpense(amount, type, navigation, category, description || '');
    };

    const categories = type === 'expense' ? expenseCategories : incomeCategories;

    return (
        <View style={styles.container}>
            <View>
                <Input
                    placeholder="Скільки?"
                    value={amount}
                    onChangeText={setAmount}
                    style={errors.amount ? styles.inputError : {}}
                />
                {errors.amount && <Text style={styles.errorText}>{errors.amount}</Text>}
            </View>

            <View>
                <Input
                    placeholder="Примітки"
                    value={description}
                    onChangeText={setDescription}
                    style={errors.description ? styles.inputError : {}}
                />
                {errors.description && <Text style={styles.errorText}>{errors.description}</Text>}
            </View>

            <View style={styles.categoryPicker}>
                <CategoryPicker
                    selectedValue={category}
                    onValueChange={setCategory}
                    categories={categories}
                />
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
        gap: Gap.g30,
    },
    inputError: {
        borderColor: Colors.error,
    },
    categoryPicker: {
        borderColor: Colors.error,
        backgroundColor: Colors.primary,
        marginBottom: MarginBottom.mb20,
    },
    errorText: {
        color: Colors.error,
        fontSize: FontSize.fs12,
        marginTop: MarginBottom.mb5,
    },
});

export default ExpenseForm;
