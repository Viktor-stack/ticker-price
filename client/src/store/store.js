import {createStore, applyMiddleware} from 'redux'
import tickerReducer from "./reducer/tickerReducer";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";


export default createStore(tickerReducer, composeWithDevTools(applyMiddleware(thunk)));
