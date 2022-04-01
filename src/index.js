import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Apps from './App';
import { BrowserRouter } from 'react-router-dom';
import {Provider} from 'react-redux'
import RootReducers from './store'
import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk';

const App = () => {
    const store = createStore(RootReducers, compose(applyMiddleware(thunk)));
  return (
      <Provider store={store}>
          <BrowserRouter>
              <Apps/>
          </BrowserRouter>
      </Provider>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App/>)
