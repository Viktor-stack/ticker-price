import './App.css';
import {Provider} from "react-redux";
import WebSocketProvider from './store/WebSoket/WebSoket'
import store from "./store/store";
import React from "react";
import HomeComponent from "./components/HomeComponent/HomeComponent";

const App = () => {
    return (
        <Provider store={store}>
            <WebSocketProvider>
                <div className="App">
                    <HomeComponent/>
                </div>
            </WebSocketProvider>
        </Provider>
    );
}

export default App;
