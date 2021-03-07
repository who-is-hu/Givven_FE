import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import axios from 'axios';
import store from './store';
import App from './App';

axios.defaults.baseURL =
  'http://ec2-13-125-92-186.ap-northeast-2.compute.amazonaws.com:8080/api';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

const persistor = persistStore(store);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </PersistGate>
  </Provider>,
  document.getElementById('root'),
);
