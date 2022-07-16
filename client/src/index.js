import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {createStore,applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

import App from './App';

//global value to share the data between components?
const store= createStore(reducers, compose(applyMiddleware(thunk)))
//const store1 = configureStore(reducers,compose(applyMiddleware(thunk)))

ReactDOM.render(
                <Provider store={store}>
                    <App/>
                </Provider>,
                 document.getElementById('root')
);
