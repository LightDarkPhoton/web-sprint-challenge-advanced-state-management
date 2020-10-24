import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";

// Creating Store and all the other Redux modules we need
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { reducer } from './reducers/reducer'

const logger = ({ getState }) => (next) => (action) => {
    console.log("Dispatching action: ", action);
    next(action)
}

let store = createStore(reducer, applyMiddleware(logger, thunk))


ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider>
    , document.getElementById("root"));
