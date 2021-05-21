import React, {useEffect} from 'react';
import s from './home.module.css'
import {useDispatch, useSelector} from "react-redux";
import {updateColor} from "../../store/actions/actions";
import Card from "../Card/Card";


const HomeComponent = () => {
    const ticker = useSelector(state => state.ticker)
    const tickerOld = useSelector(state => state.tickerOld)
    const color = useSelector(state => state.colorList)
    const dispatch = useDispatch()

    // useEffect(() => {
    //     dispatch(updateColor())
    // }, [ticker])


    return (
        <div className={s.container}>
            <div className={s.box}>
                {ticker.map((i, index) => {
                    return (
                        <Card key={index} i={i} tickerOld={tickerOld[index]}/>
                    )
                })}
            </div>

        </div>
    );
};

export default HomeComponent;
