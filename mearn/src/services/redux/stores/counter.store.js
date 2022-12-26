// We'll use redux-logger just as an example of adding another middleware
import logger from 'redux-logger'
import { configureStore } from '@reduxjs/toolkit'
import { counterReducer } from '../reducers/counter.reducer'
import crashReporter from '../middlewares/helpers.middleware';

const counterStore = configureStore({
    reducer: {
        counter: counterReducer.reducer
    },
    middleware: [logger, crashReporter],
    devTools: process.env.NODE_ENV !== 'production',
})

export default counterStore;