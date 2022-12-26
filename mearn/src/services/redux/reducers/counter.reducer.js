import { createSlice } from '@reduxjs/toolkit'
import {defaultCounterProperties, counterProperties} from '../constants/counter.constants';

export const counterReducer = createSlice({
    name: 'counter',
    initialState: {
        value: defaultCounterProperties
    },
    reducers: {
        getCounterValues: state => {
            state.value =  counterProperties
        }
    }
})


export const { getCounterValues } = counterReducer.actions
export default counterReducer;

