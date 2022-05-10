import languageReducer from "./language/LanguageReducer";
import recommendProductsReducer from "./recommendProducts/recommendProductsReducer";
import { actionLog } from "./middlewares/actionLog";
import { productDetailSlice } from "./productDetail/slice";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { productSearchSlice } from "./productSearch/slice";
import { UserSlice } from "./user/slice";
import { shoppingCartSlice } from "./shoppingCart/slice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { orderSlice } from "./order/slice";

const persistConfig ={
    key: "root",
    storage,
    whitelist: ["user"]
}

const rootReducer = combineReducers({
    language: languageReducer,
    recommendProducts:recommendProductsReducer,
    productDetail: productDetailSlice.reducer,
    productSearch: productSearchSlice.reducer,
    user: UserSlice.reducer,
    shoppingCart: shoppingCartSlice.reducer,
    order: orderSlice.reducer 
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

// const store = createStore(rootReducer, applyMiddleware(thunk, actionLog));
const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), actionLog],
    devTools: true,
})

const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>

export default { store, persistor };