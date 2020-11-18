import { createStore, applyMiddleware, compose } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
import rootReducer from "../reducers";
// Saga
import createSagaMiddleware from "redux-saga";
import rootSaga from "../sagas";

// redux peresist config
const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};
// create persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// create saga middleware
const sagaMiddleware = createSagaMiddleware();
let middleware = applyMiddleware(sagaMiddleware);

// add redux devtools extension middleware if exists in window object
const composeMiddleWare = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// createe a store
let store = createStore(persistedReducer, composeMiddleWare(middleware));
// create persistor function for PersistGate component
let persistor = persistStore(store);

// start Saga middleeware
sagaMiddleware.run(rootSaga);

export { store, persistor };
