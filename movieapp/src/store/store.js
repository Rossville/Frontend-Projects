import {configureStore} from '@reduxjs/toolkit';
import PortalReducer from '../components/Features/PortalSlice';
import MovieFetchReducer from '../components/Features/MovieSlice';
import {combineReducers} from '@reduxjs/toolkit';

const rootreducer = combineReducers({
    portal : PortalReducer,
    movie : MovieFetchReducer
})

export const store = configureStore({
    reducer : MovieFetchReducer
});