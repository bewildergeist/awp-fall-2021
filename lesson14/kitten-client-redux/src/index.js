import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import data from './data.json';

// Our reducer functions lives inside this module
import reducer from './reducers';

// Logging middleware for the store. Prints out all actions in the redux store to the browser console.
const logger = store => next => action => {
  console.group(action.type);
  console.info('dispatching', action);
  let result = next(action);
  console.log('next state', store.getState());
  console.groupEnd();
  return result;
};

// Create the store with some initial data from a json file.
// Adding the logging middleware from above as well.
const store = createStore(reducer, { kittens: data }, applyMiddleware(logger));

ReactDOM.render(
  // Provide the store to all components from <App> and below
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
