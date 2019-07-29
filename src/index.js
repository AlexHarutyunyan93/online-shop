import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './components/App/App';
import * as serviceWorker from './serviceWorker';

import createStore from './store';

const store = createStore();

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));


serviceWorker.unregister();
