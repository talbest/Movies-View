import { createStore, combineReducers, compose, applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension";
import { moviesReducer } from "./reducers/moviesReducers"
import createsagaMiddleware from "redux-saga"
import { sagaReducer } from "./reducers/segeReducer";
import mySaga from "./saga"

const sagaMiddlware = createsagaMiddleware()

export const rootReducer = combineReducers({
    moviesReducer,
    sagaReducer,
})

export const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(sagaMiddlware)))
sagaMiddlware.run(mySaga)

