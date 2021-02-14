import React from 'react';
import ReactDOM from 'react-dom';
import App from "./routes/App";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers'
import state from '../initialState.json'

const initialState = state

const store = createStore(reducer, initialState)

ReactDOM.render(

    <Provider store={store}>
        <App />
    </Provider>,

    document.getElementById('app'));
