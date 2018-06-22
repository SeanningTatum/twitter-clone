import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// Redux stuff
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom'
import tweetReducer from 'store/reducers/tweets';
import authReducer from 'store/reducers/auth';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
   auth: authReducer, 
   tweet: tweetReducer
});

const store = createStore(
   rootReducer,
   applyMiddleware(thunk) 
   //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


const app = (
   <Provider store={store}>
      <BrowserRouter>
         <App />
      </BrowserRouter>
   </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
