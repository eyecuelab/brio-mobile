import { createStore, applyMiddleware, compose } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-community/async-storage";
// Saga
import rootReducer from "../reducers";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../sagas";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(persistedReducer, reduxDevTools(middleware));
let persistor = persistStore(store);

// Saga
const sagaMiddleware = createSagaMiddleware();
let middleware = applyMiddleware(sagaMiddleware);
sagaMiddleware.run(rootSaga);

export { store, persistor };
