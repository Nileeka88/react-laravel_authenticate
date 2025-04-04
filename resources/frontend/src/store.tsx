
import {combineReducers, configureStore} from "@reduxjs/toolkit";
import { persistStore, persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage';
import AuthReducer from '../src/utilities/slices/auth/AuthSlice.tsx'

const persistConfig = {
    key: 'root',
    storage,
    whitelist:['auth'],
}


const rootReducer = combineReducers({
        auth: AuthReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    reducer:persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false
        }),
})

const persistor = persistStore(store)

export {store, persistor}
