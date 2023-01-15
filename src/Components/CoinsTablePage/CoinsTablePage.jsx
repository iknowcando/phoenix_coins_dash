import style from './CoinsTablePage.module.css'
import React,{useEffect, useRef, useState} from "react";
import {coinsAPI} from "../../API/API";

const  usePrevious=(value)=>{
    // The ref object is a generic container whose current property is mutable ...
    // ... and can hold any value, similar to an instance property on a class
    const ref = useRef();
    // Store current value in ref
    useEffect(() => {

        ref.current = value;
    }, [value]); // Only re-run if value changes
    // Return previous value (happens before update in useEffect above)
    return ref.current;
}

const  CoinsTablePage = (props) => {

    const [state, setState] = useState([]);

    const prevState = usePrevious(state)
    useEffect(() => {

        coinsAPI.getCoins().then(request =>
            setState(request))
    }, [state])

    return (
        <div className={style.containerPage}>
            <div className={style.presentBlock}>
            <h1>Top Cryptocurrency by Market Capitalization</h1>
            <h2>Total Market Cap:{/*рост ${prevState[0].priceUsd < state[0].priceUsd} падение ${prevState[0].priceUsd > state[0].priceUsd*/}</h2>
            </div>
            <div>
                <div><span>prev</span></div>
                <div><span>next</span></div>
                <div><span>all</span></div>
            </div>
            <div className={style.tableContainer}>
            <table >
                <colgroup>
                    <col className={style.colRank}></col>
                    <col className={style.colSymbol}></col>
                    <col className={style.colName}></col>
                    <col className={style.colMakcetCup}></col>
                    <col className={style.colPrice}></col>
                    <col className={style.Volume}></col>
                    <col className={style.Supply}></col>
                    <col className={style.Change}></col>

                </colgroup>
            <thead>
            <tr className={`${style.thead}`}>
                <th>#</th>
                <th>Symbol</th>
                <th>Name</th>
                <th>Market Cap (USD)</th>
                <th>Price (USD)</th>
                <th>Volume 24h</th>
                <th>Circulating Supply</th>
                <th>Change 24h</th>
            </tr>
            </thead>
            <tbody>
            {state.map((el,i) =>{

                const up = (prevState[i]?.p || state[i].p)  < state[i].p
                const low = (prevState[i]?.p || state[i].p) > state[i].p
                /*{
                    "c": "coin",
                    "ch": -3.43,
                    "em": 19235250,
                    "mc": 323193764288.77,
                    "mcr": 1,
                    "n": "Bitcoin",
                    "p": 16802.16,
                    "pb": 16802.16,
                    "pr": "SHA256",
                    "s": "BTC",
                    "sl": "bitcoin-btc",
                    "st": "Base",
                    "v": 10870322047.15
                }*!/*/

                return (<tr className={style.row} key={`${el.s}-${el.sl}`}>
                    <th className={style.cel}>{el.mcr}</th>
                    <th className={style.cel}>
                        <div className={style.symbolBlock}>
                            <div><img className={style.cLogo} alt={`logo ${el.name}`} src={`https://coin360.com/icons/slug-coins/32x32/${el.sl}.png`}></img></div>
                            <div>{el.s}</div></div></th>
                    <th className={style.cel}>{el.n}</th>
                    <th className={`${style.cel}`}>{el.mc}</th>
                    <th className={`${low ? style.low : null} ${up ? style.up : null} ${style.cel}`}>{el.p}</th>
                    <th className={style.cel}>{el.v}</th>
                    <th className={style.cel}>{el.em}</th>
                    {el.ch > 0? <th className={`${low ? style.low : null} ${up ? style.up : null} ${style.cel} ${style.plus} ${style.cel}`}>+{el.ch}%</th>:<th className={`${low ? style.low : null} ${up ? style.up : null} ${style.cel} ${style.minus} ${style.cel}`}>{el.ch}%</th>}
                </tr>)})
            }
            </tbody>
            </table>
            </div>
            </div>
    )
}
export default CoinsTablePage;