import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import expenseReducer from './slices/expenseSlice';



const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, expenseReducer);

export const store = configureStore({
    reducer: {
        expenses: persistedReducer,
    },
});

export const persistor = persistStore(store);

// Refresh data
// persistor.purge(); 

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
