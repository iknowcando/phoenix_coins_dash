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
      "vwap24Hr": "7175.0663247679233209"*/
    return (
        <div className={style.containerPage}>
            {state.map(el =>
                <div key={el.id}><span>{el.rank}</span> <span>{el.symbol}</span> <span>{el.name}</span> <span>{el.priceUsd}</span> <span>{el.marketCapUsd}</span> <span>{el.changePercent24Hr}</span></div>)
            }
        </div>
    )
}
export default CoinsTablePage;