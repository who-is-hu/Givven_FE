import { createStore } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import modules from './modules';

const persistConfig = {
  key: 'root',
  storage,
};

const configure = () => {
  // const store = createStore(modules);
  const devTools =
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__();
  const store = createStore(persistReducer(persistConfig, modules), devTools);

  return store;
};

export default configure;
