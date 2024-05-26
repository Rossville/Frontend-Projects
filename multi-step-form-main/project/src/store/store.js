import {configureStore} from '@reduxjs/toolkit';
import ChangeReducer from '../features/ChangeSectionSlice';

export const store = configureStore({
    reducer: ChangeReducer
});