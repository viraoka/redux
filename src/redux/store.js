import { configureStore } from '@reduxjs/toolkit';
import counter from './counter';

export const store = configureStore({
reducer: {},
})

export default configureStore({
    reducer: {
        counter: counter
    }
})

