import style from './CoinsTablePage.module.css'
import {useEffect, useRef, useState} from "react";
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
                let changeStatus = Math.round(el.changePercent24Hr*100)/100;

                let up = (prevState[i]?.priceUsd || state[i].priceUsd)  < state[i].priceUsd
                let low = (prevState[i]?.priceUsd || state[i].priceUsd) > state[i].priceUsd

                return (<tr className={style.row} key={el.id}>
                    <th className={style.cel}>{el.rank}</th>
                    <th className={style.cel}>{el.symbol}</th>
                    <th className={style.cel}>{el.name}</th>
                    <th className={`${low? style.low:null} ${up? style.up:null} ${style.cel}`}>{Math.round(el.marketCapUsd*100)/100}</th>
                    <th className={style.cel}>{Math.round(el.priceUsd*100)/100}</th>
                    <th className={style.cel}>{Math.round(el.volumeUsd24Hr*100)/100}</th>
                    <th className={style.cel}>{Math.round(el.supply*100)/100}</th>
                    {changeStatus > 0? <th className={`${style.plus} ${style.cel}`}>+{changeStatus}%</th>:<th className={`${style.minus} ${style.cel}`}>{changeStatus}%</th>}
                </tr>)})
            }
            </tbody>
            </table>
            </div>
            </div>
    )
}
export default CoinsTablePage;