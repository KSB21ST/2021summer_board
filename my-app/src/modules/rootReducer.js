import { combineReducers } from 'redux';
import uriReducer from './uriReducer';
import boardReducer from './boardReducer';
import AppReducer from './App_reducer';
import RippleReducer from './rippleReducer';

const rootReducer = combineReducers({
    uriReducer,
    boardReducer,
    RippleReducer,
    AppReducer

});
 
export default rootReducer;