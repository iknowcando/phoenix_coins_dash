import style from './CoinsTablePage.module.css'
import {useEffect, useState} from "react";
import {coinsAPI} from "../../API/API";


const CoinsTablePage = (props) => {

    const [state, setState] = useState([{id: 1, name: 'bitcoin'}]);

    useEffect(() => {
        coinsAPI.getCoins().then(request => setState(request))
    }, [state])
    /*"rank": "1",
      "symbol": "BTC",
      "name": "Bitcoin",
      "supply": "17193925.0000000000000000",
      "maxSupply": "21000000.0000000000000000",
      "marketCapUsd": "119150835874.4699281625807300",
      "volumeUsd24Hr": "2927959461.1750323310959460",
      "priceUsd": "6929.8217756835584756",
      "changePercent24Hr": "-0.8101417214350335",
      "vwap24Hr": "7175.0663247679233209"*

     {state.map(el =>
                <tr key={el.id}><th>{el.rank}</th> <th>{el.symbol}</th> <th>{el.name}</th> <th>{el.priceUsd}</th> <th>{el.marketCapUsd}</th> <th>{el.changePercent24Hr}</th></tr>)
            }
     */
    return (
        <div className={style.containerPage}>
            <div className={style.presentBlock}>
            <h1>Top Cryptocurrency by Market Capitalization</h1>
            <h2>Total Market Cap:</h2>
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
            {state.map(el =>{
                let changeStatus = Math.round(el.changePercent24Hr*100)/100;
                return (<tr className={style.row} key={el.id}>
                    <th className={style.cel}>{el.rank}</th>
                    <th className={style.cel}>{el.symbol}</th>
                    <th className={style.cel}>{el.name}</th>
                    <th className={style.cel}>{Math.round(el.marketCapUsd*100)/100}</th>
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