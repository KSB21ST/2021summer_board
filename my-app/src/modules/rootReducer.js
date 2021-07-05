import { combineReducers } from 'redux';
import uriReducer from './uriReducer';
import boardReducer from './boardReducer';
import AppReducer from './App_reducer';
import RippleReducer from './rippleReducer';
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage
  };
  
const rootReducer_ = combineReducers({
    uriReducer,
    boardReducer,
    RippleReducer,
    AppReducer

});

const rootReducer = persistReducer(persistConfig, rootReducer_);
 
export default rootReducer;