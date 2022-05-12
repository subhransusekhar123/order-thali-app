import {configureStore} from '@reduxjs/toolkit';
import slicer from './thaliSlice'
import orderSlice from './orderSlice';

export const store = configureStore({
    reducer:{
        thaliSlice:slicer,
        orderSlice:orderSlice
    }
})