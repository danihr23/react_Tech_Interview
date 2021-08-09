import React from 'react'
import { useSelector } from 'react-redux'
import PriceStyle from './priceField.module.css'




const PriceField = () => {

    const count = useSelector((store)=> store.game.count)
   
    const bet = useSelector((store)=> store.game.bet);
    
    const plays = useSelector(store=> store.game.plays);

    const store = useSelector((store)=>store)


    console.log(store);
    const price = (Number(plays)*Number(count)*Number(bet)).toFixed(2)
    return (
        <div className={PriceStyle.priceField}>
            <h2 className={PriceStyle.priceFieldLabel}>Price</h2>
            <h3 className={PriceStyle.priceFieldPrice}>{price}</h3>
            
        </div>
    )
}

export default PriceField
