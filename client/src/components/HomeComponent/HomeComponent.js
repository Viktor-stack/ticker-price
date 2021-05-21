import React from 'react';
import s from './home.module.css'
import {useSelector} from "react-redux";

import Card from "../Card/Card";


const HomeComponent = () => {
    const ticker = useSelector(state => state.ticker)
    const tickerOld = useSelector(state => state.tickerOld)
    return (
        <div className={s.container}>
            <div className={s.box}>
                {ticker.map((i, index) => <Card key={index} i={i} index={index} tickerOld={tickerOld[index]}/>)}
            </div>
        </div>
    );
};

export default HomeComponent;
